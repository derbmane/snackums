const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Cart, ProductInCart } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    // FUNCTIONING
    users: async (parent, args, context) => {
      return await User.findAll();
    },

    // Functioning without authentcation
    user: async (parent, {email}, context) => {
//      if (context.user) {
	return await User.findOne({where: {email}});
    },
//      throw new AuthenticationError('Not logged in');
//    },

    // FUNCTIONING
    products: async (parent, args, context) => {
      return await Product.findAll();
    },

    // NOT FUNCTIONING - cannot readd poperties fo oundefined
    product: async (parent, {id}, context) => {
//      if(context.product) {
      return await Product.findByPk(id);
    },
//      throw new AuthenticationError('Not logged in');
//    },

    cart: async (parent, {userId}, context) => {
      //if(context.user) {
	const cartId = await Cart.findOne({where: {userId: userId}});
	return await ProductInCart.findAll({where: {cartId: cartId}});
      },
//      throw new AuthenticationError('Not logged in');
  

  country: async (parent, { country }, context) => {
     return await Product.findAll({ where: { country: country } });
    },
  },


  Mutation: {
    
    // FUNCTIONING
    addUser: async (parent, {firstName, lastName, email, password}) => {
      const user = await User.create(
	{
	  firstName,
	  lastName,
	  email,
	  password
	});
      const token = signToken(user);
      return { token, user };
    },

    //NOT FUNCITONING
    updateUser: async (parent, {userId, firstName, lastName, email, password}, context) => {
      if (context.user) {
	return await User.update(
	  {
	    firstName,
	    lastName,
	    email,
	    password
	  },
	  {
	    where: {id: userId}
	  }
	)
      }
    },

    //NOT FUNCTIONING
    deleteUser: async (parent, {userId}, context) => {
      return await User.destroy(
	{
	  where: {id: userId}
	}
      );
    },
    
    // FUNCTIONING
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({where: { email }});
      if (!user) {
	throw new AuthenticationError("There is no user of that email");
      }
      const correctPw = await user.checkPassword(password);
      if (!correctPw) {
	throw new AuthenticationError("Password is incorecct");
      }
      const token = signToken(user);
      return { token, user };
    },
    
    addProduct: async (parent, {itemName, priceUsd, country, image, description}, context) => {
      return await Product.create(
	{
	  itemName,
	  priceUsd,
	  country,
	  image,
	  description
	});
    },
    
    updateProduct: async (parent, {productId, itemName, priceUsd, country, image, description}, context) => {
      return await Product.update(
	{
	  itemName,
	  priceUsd,
	  country,
	  image,
	  description
	},
	{
	  where:{id: productId}
	}
      );
    },
    
    deleteProduct: async (parent, {productId}, context) => {
      const product = await Product.destroy(
	{
	  where: {id: poductId}
	}
      );
    },
    
    addToCart: async (parent, {cardIt, productId}, context) => {
      const cart = await ProductInCart.update(
	{productId},
	{
	  where: { cartId}
	}
      );
    },
    
    removeFromCart: async (parent, {cartId, productId}, context) => {
      const product = await ProductInCart.destroy(
	{ where: {
	    cartId: cartId,
	  productId: poductId
	}}
      );
    },
    
  }
};

module.exports = resolvers;
