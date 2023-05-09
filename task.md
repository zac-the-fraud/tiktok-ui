# crete react app
# add router
# add custumize - cra
    - add babel module resolver plugin
    - install react-app-rewired
    - flip script in package.json
    - setup .babelrc
    - setup config-overrides.js
# create global styles
    - use css module
# add sass library
    - reset css - normalize css npm
    - set default css
# Setup router for the web
    - get routes into a specific file
    - private route // login to redirect
    - public route
# set up cơ chế tải layout
    - create default layout
        - header
        - sidebar
        - export default as DefaultLayout //es6 recheck
    - if a route is not define a layout => automically use default layout
# use css module, create css for Header
    - install classnames
        - use css.bind() để viết được tên class có chứa dấu "-" trong JSX thay vì phải dùng camel case
            - className = post-item
            - className = postItem
    - create /assets/images
        - learn how to export default an object contain svg file
    - add fontawsome to package json - npm i to install added packet
        - import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
        - <FontAwesomeIcon icon={faCircleXmark} />
            - import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"; will be added after use <FontAwesomeIcon ...>

