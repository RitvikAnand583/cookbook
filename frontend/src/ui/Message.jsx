Message.defaultProps = {
  style: {
    color: "black",
    fontSize: "14px",
  },
};

function Message({ style, children }) {
  return <p style={style && style}>{children}</p>;
}

export default Message;
