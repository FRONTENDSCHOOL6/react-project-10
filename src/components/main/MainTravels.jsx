import React from 'react';
import { useState } from 'react';
import pocketbase from '@/api/pocketbase';
import { useEffect } from 'react';
import { getPocketHostTravelsURL, getPocketHostImageURL } from '@/utils';
import MainMoreButton from './MainMoreButton';
import { Link } from 'react-router-dom';

async function fetchUsers() {
  const response = await fetch(`${getPocketHostTravelsURL('travels')}`);
  return await response.json();
}

function MainTravels({ item, title = '', text = '' }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const usersList = await pocketbase.collection('travels').getFullList();
      setData(usersList);
    }

    fetchUsers();
  }, []);

  return (
    <div className=" flex flex-col items-center">
      <ul className="grid grid-cols-1 gap-5 px-[1.688rem] pb-[1.25rem] pt-[0.625rem] md:grid md:grid-cols-2 md:gap-10">
        {data?.map((item) => (
          <Link to={`/travels/:${item.id}`}>
            <li
              key={item.id}
              className="overflow-hidden rounded-md transition hover:scale-110 hover:rounded-lg "
            >
              <img src={getPocketHostImageURL(item).split(',')[0]} alt="" />
              <div className="pb-[1.25rem] pt-[0.625rem]">
                <p className="text-base font-semibold">{item.title}</p>
                <p className="text-sm font-light text-gray-500">{item.text}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      {/* <MainMoreButton /> */}
    </div>
  );
}

export default MainTravels;
