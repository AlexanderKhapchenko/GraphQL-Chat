function postMessage(parent, args, context, info) {
  return context.prisma.createMessage({
    text: args.text,
    likes: args.likes,
    dislikes: args.dislikes
  });
}

async function postReply(parent, args, context, info) {
  const messageExist = await context.prisma.$exists.message({
    id: args.messageId
  });

  if (!messageExist) {
    throw new Error(`Prodict with ID ${args.messageId} does not exist`);
  }

  return context.prisma.createReply({
    text: args.text,
    message: { connect: { id: args.message } }
  });
}

function updateMessageLike(parent, args, context, info) {
	return context.prisma.updateMessage({
		data: {
			likes: args.likes,
		},
		where: {
			id: args.id,
		}
	});
}

function updateMessageDislike(parent, args, context, info) {
	return context.prisma.updateMessage({
		data: {
			dislikes: args.dislikes,
		},
		where: {
			id: args.id,
		}
	});
}

module.exports = {
  postMessage,
  postReply,
	updateMessageLike,
	updateMessageDislike
}