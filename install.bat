:: Install project dependencies
yarn install
:: Adding yalc
yarn global add yalc
:: Linking submodules
:: 1/Cornerstone Tools
cd cornerstoneTools
yarn install
yalc publish
cd ..
yarn install
yalc add cornerstone-tools
:: 2/Ohif-core
cd ohif-core
yarn install
yalc publish
cd ..
yarn install
yalc add ohif-core
:: 3/React Viewerbase
cd react-viewerbase
yarn install
yalc publish
cd ..
yarn install
yalc add react-viewerbase
:: 4/Ohif cornerstone extension
cd extensions\ohif-cornerstone-extension
yarn install
yalc publish
cd ..\..
yarn install
yalc add @ohif/extension-cornerstone
:: run viewer
yarn run dev

