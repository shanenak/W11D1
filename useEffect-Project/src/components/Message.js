import { useEffect, useState } from "react";

function Message({ size, featherCount }) {

  const [classSize, setClassSize] = useState('s');
  const [turkeyMessage, setTurkeyMessage] = useState('');

  useEffect(()=> {
    switch (size) {
      case 's':
        setClassSize('small')
        break;
      case 'm':
        setClassSize('medium')
        break;
      case 'l':
        setClassSize('large')
        break;
      case 'xl':
        setClassSize('xlarge')
        break;
      default:
        setClassSize('small')
        break;
    }
  }, [size])
  
  useEffect(()=> {
    let words = '';
    if (featherCount < 1) words = 'Your turkey is naked!';
    else if (featherCount < 2) words = 'Your turkey needs more feathers';
    else if (featherCount < 4) words = 'Nice feathers';
    else words = 'So many feathers!';
    setTurkeyMessage(words);
  }, [featherCount])

  return (
    <div className={`message ${classSize}`}>
      {turkeyMessage}
    </div>
  );
};

export default Message;