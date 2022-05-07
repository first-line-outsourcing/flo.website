const screens = {
  mobile: '(min-width: 320px)',
  table: '(min-width: 768px)',
  desktop: '(min-width: 1440px)',
};

const screensList = Object.keys(screens);

let current;

run();

function run() {
  if (!window.matchMedia) {
    return;
  }

  for (const screen of screensList) {
    add(screen, screens[screen]);
  }
}

function add(name, query) {
  const mq = window.matchMedia(query);

  if (mq.matches) {
    on(name);
  }

  mq.addEventListener('change', (event) => event.matches && on(name));
}

function on(name) {
  console.log('screen changed, current = %s, next = %s', current, name);

  if (current) {
    document.body.classList.remove(`screen-${current}`);
  }

  current = name;
  document.body.classList.add(`screen-${current}`);
}
