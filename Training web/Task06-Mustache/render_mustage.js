let data = [
  {
    name: "Saitama",
    description: "Besto hero and most the most powerful man on earth",
    price: "100",
  },
  {
    name: "Chuck Norris Bodyguard",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Fusce" +
      "eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique " +
      "accumsan nec at enim. Etiam posuere tellus ut ligula feugiat autcor." +
      "Morbi ut quam aliquet, viverra purus in,convallis ante.",
    price: "15",
  },
  {
    name: "Chuck Norris Bodyguard",
    description:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Fusce" +
      "eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique " +
      "accumsan nec at enim. Etiam posuere tellus ut ligula feugiat autcor." +
      "Morbi ut quam aliquet, viverra purus in,convallis ante.",
    price: "50",
  },
];

$.each(data, function (index, item) {
  let template = document.getElementById('template').innerHTML;
  $("ul").append(Mustache.render(template, item));
});
