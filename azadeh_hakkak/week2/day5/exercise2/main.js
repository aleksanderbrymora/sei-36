const $links = $('li a');
for (let i = 0; i < $links.length; i++) {
const link = $links[i];
const $link = $ (link);
const href = $link.attr('href');
const thumbnailUrl = youtube.generateThumbnailUrl(href);
//create an image and set attribute image src
const img = $('<img>').attr('src', thumbnailUrl);

$link.append(img);

}

$('h1').funText(33, 'candy');
$('a').funText(30, 'candy');
