:: Install project dependencies
CALL yarn install
:: Adding yalc
CALL yarn global add yalc
:: Linking submodules
:: 1/Cornerstone Tools
CALL cd cornerstoneTools
CALL yarn install
CALL yalc publish
CALL cd ..
CALL yarn install
CALL yalc add cornerstone-tools
:: 2/Ohif-core
CALL cd ohif-core
CALL yarn install
CALL yalc publish
CALL cd ..
CALL yarn install
CALL yalc add ohif-core
:: 3/React Viewerbase
CALL cd react-viewerbase
CALL yarn install
CALL yalc publish
CALL cd ..
CALL yarn install
CALL yalc add react-viewerbase
:: 4/Ohif cornerstone extension
CALL cd extensions\ohif-cornerstone-extension
CALL yarn install
CALL yalc publish
CALL cd ..\..
CALL yarn install
CALL yalc add @ohif/extension-cornerstone
:: run viewer
CALL yarn run dev

