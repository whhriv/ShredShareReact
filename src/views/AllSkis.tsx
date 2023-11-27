import React from 'react'

type Props = {}

export default function AllSkis({}: Props) {
  const skis = [
    {
      id: 1,
      text: 'Pink Jeff',
      timestamp: 'a minute ago',
      author: {
        username: 'susan',
      },
    },
    {
      id: 2,
      text: 'POWABUNGA',
      timestamp: 'an hour ago',
      author: {
        username: 'john',
      },
    },
  ];

  return (
    <>
      {skis.length === 0 ?
        <p>There are no blog skis.</p>
      :
        skis.map(ski => {
          return (
            <p key={ski.id}>
              <b>{ski.author.username}</b> &mdash; {ski.timestamp}
              <br />
              {ski.text}
            </p>
          );
        })
      }
    </>
  );
}