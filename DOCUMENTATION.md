# Documentation for getfitr-foundation library

## `useCachedResources()`

Load all necessary resources for the mobile App before other resources are loaded and the App is started.

### Since

0.0.3

### Arguments

None

### Returns

*`(boolean)`*: Returns `true` when all resources are loaded and cached and `false` when the loading is not done.

### Examples

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
