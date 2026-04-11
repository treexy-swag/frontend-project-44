install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-games-npm:
	npm run brain-games

publish:
	npm publish --dry-run

lint:
	npx eslint .