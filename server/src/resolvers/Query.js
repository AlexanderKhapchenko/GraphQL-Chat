
async function messages(parent, args, context) {
  let where = {}
  if(args.filter) {
    where = {
      id: args.filter
    };
  }

  if(args.search) {
    where = {
      text_contains: args.search,
    }
  }

  const messageList = await context.prisma.messages({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });

  return {
    messageList,
  };
}

module.exports = {
  messages
}