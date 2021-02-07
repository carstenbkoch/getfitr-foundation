# GetFitr foundation

[![npm version](https://badge.fury.io/js/getfitr-foundation.svg)](https://badge.fury.io/js/getfitr-foundation)
[![Dependency Status](https://david-dm.org/carstenbkoch/getfitr-foundation.svg)](https://david-dm.org/carstenbkoch/getfitr-foundation)
[![codecov](https://codecov.io/gh/carstenbkoch/getfitr-foundation/branch/main/graph/badge.svg)](https://codecov.io/gh/carstenbkoch/getfitr-foundation)
[![Downloads](https://img.shields.io/npm/dm/getfitr-foundation.svg)](https://npmjs.org/package/getfitr-foundation)
[![Code Quality: Javascript](https://img.shields.io/lgtm/grade/javascript/g/carstenbkoch/getfitr-foundation.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/carstenbkoch/getfitr-foundation/context:javascript)
[![Total Alerts](https://img.shields.io/lgtm/alerts/g/carstenbkoch/getfitr-foundation.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/carstenbkoch/getfitr-foundation/alerts)

The foundational UI and backend communication elements for [GetFitr](http://getfitr.de), an open source fitness tracker based on [React](https://reactjs.org) and [AWS Amplify](https://aws.amazon.com/amplify/)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install getfitr-foundation --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add getfitr-foundation
```

You’ll need to install React, PropTypes, and Amplify separately since those dependencies aren’t included in the package. If you need to use a locale other than the default en-US, you'll also need to import that into your project from date-fns (see Localization section below). Below is a simple example of how to import the foundation for this fitness tracker into your project.

```js
import React from 'react'
import { useCachedResources } from 'getfitr-foundation'

export const App = () => {
    const isLoadingComplete = useCachedResources()
    
    if (!isLoadingComplete) {
        return null
    } else {
        return (
            // ...
        )
    }
}
```

It is useful to just import the functions you want to use in your code as shown in the example above.

## Compatibility

### React

We're always trying to stay compatible with the latest version of React. We can't support all older versions of React.

Latest compatible versions:

- React 16 or newer: getfitr-foundation v0.0.2 and newer

### Browser Support

The getfitr-foundation is compatible with the latest versions of Chrome, Firefox, and IE10+.

Unfortunately, it is difficult to support legacy browsers while maintaining our ability to develop new features in the future. For IE9 support, it is known that the [classlist polyfill](https://www.npmjs.com/package/classlist-polyfill) is needed, but this may change or break at any point in the future.

## Local Development

The `main` branch contains the latest version of the package.

To begin local development:

1. `yarn install`
2. `yarn build-dev`
3. `yarn start`

The last step starts documentation app as a simple webserver on http://localhost:3000.

You can run `yarn test` to execute the test suite and linters. To help you develop the component we’ve set up some tests that cover the basic functionality (can be found in `/tests`). Even though we’re big fans of testing, this only covers a small piece of the component. We highly recommend you add tests when you’re adding new functionality.

### The examples

The examples are hosted within the docs folder and are ran in the simple app that loads the package. To extend the examples with a new example, you can simply duplicate one of the existing examples and change the unique properties of your example.

## License

Copyright (c) 2021-present Carsten Koch and individual contributors. Licensed under MIT license, see [LICENSE](LICENSE) for the full license.
