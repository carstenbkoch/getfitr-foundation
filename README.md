# GetFitr foundation

The foundational UI and backend communication elements for [GetFitr](http://getfitr.de).

## Getting Started

Install the library using `npm`:

```ssh
npm install getfitr-foundation --save
```

Use the library by importing it:

```javascript
import React from 'react'
import useCachedResources from 'getfitr-foundation'

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

I think it is useful to just import the functions you want to use in your code as shown in the example above.

## Documentation

Find the documentation for the library [here](./DOCUMENTATION.md).

## Contribute and raise issues

Feel free to contribute to the library and send me a pull request in the [Github repo](https://github.com/carstenbkoch/getfitr-foundation). Also, feel free to raise an issue in the repo.
