const truncate = (text, length) => {
    // BEGIN (write your solution here)
    return text.replace(text.slice(length), '...');
    // END
  };

  console.log(truncate('google', 2));