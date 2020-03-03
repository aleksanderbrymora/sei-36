const links = document.querySelectorAll('li a');

for(let i = 0; i < links.length;i++)
{
  const link = links[ i ];
  const href = link.getAttribute('href');
  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const image = document.createElement('img');
  image.setAttribute('src', thumbnailURL);
  link.appendChild(image);
}
