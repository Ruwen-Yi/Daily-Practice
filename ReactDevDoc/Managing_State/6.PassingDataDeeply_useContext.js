/*  📁 App.js */
import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './Context.js';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider
      value={imageSize}
    >
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place place={place} />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

/*  📁 Context.js */
import { createContext } from 'react';
export const ImageSizeContext = createContext(500);



/*  📁 data.js */
export const places = [{
  id: 0,
  name: '南非开普敦的波卡普区',
  description: '为房屋选择亮色的传统始于 20 世纪后期。',
  imageId: 'K9HVAGH'
}, {
  id: 1, 
  name: '中国台湾省台中市彩虹村',
  description: '1924 年，当地居民黄永福为了避免拆迁，将 1200 间房屋全部粉刷。',
  imageId: '9EAYZrt'
}, {
  id: 2, 
  name: '墨西哥的帕丘卡宏观壁画',
  description: '世界上最大的壁画之一，覆盖了山坡上的房屋。',
  imageId: 'DgXHVwu'
}, {
  id: 3, 
  name: '巴西里约热内卢的塞拉龙楼梯',
  description: '这个地标由智利出生的艺术家 Jorge Selarón 创作，以“向巴西人民致敬”。',
  imageId: 'aeO3rpI'
}, {
  id: 4, 
  name: '意大利布拉诺',
  description: '这些房屋按照一个可追溯到 16 世纪的特定颜色系统进行粉刷。',
  imageId: 'kxsph5C'
}, {
  id: 5, 
  name: '摩洛哥舍夫沙万',
  description: '关于为什么房屋被涂成蓝色，有几种理论，包括这几种颜色可以驱蚊或者它象征着天空和天堂。',
  imageId: 'rTqKo46'
}, {
  id: 6,
  name: '韩国釜山甘川文化村',
  description: '2009 年，该村通过粉刷房屋并举办展览和艺术装置而转变为文化中心。',
  imageId: 'ZfQOOzf'
}];

/*  📁 utils.js */
export function getImageUrl(place) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}

