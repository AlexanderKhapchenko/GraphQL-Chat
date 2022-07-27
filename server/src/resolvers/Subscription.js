function newMessageSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.message({
    mutation_in: ['CREATED']
  }).node();
}

const newMessage = {
  subscribe: newMessageSubscribe,
  resolve: payload => {
    return payload;
  }
};

function newReplySubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.reply({
    mutation_in: ['CREATED']
  }).node();
}

const newReply = {
	subscribe: newReplySubscribe,
  resolve: payload => {
    return payload;
  }
}

function changeMessageSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.message({
    mutation_in: ['UPDATED']
  }).node();
}

const changeMessage = {
	subscribe: changeMessageSubscribe,
  resolve: payload => {
    return payload;
  }
}

module.exports = {
  newMessage,
	newReply,
	changeMessage
};