import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  let imgSize = size>=90? 'b':'s';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imgSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={90}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
