let count = 0;

const Message = () => {
  console.log("Clicked", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
