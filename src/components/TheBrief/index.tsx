import * as React from 'react'

export default class TheBrief extends React.Component {
  render() {
    return (
      <div>
        <h1>Front-End Task</h1>

<p>Our customer needs to manage transformation dictionaries.
In this specific case dictionaries are used to normalise values in dataset columns.</p>

<p>Consider the following example of a small dataset of products:</p>

<h3>Original Dataset:</h3>

Product
Color
Price
Apple iPhone 6s
Anthracite
CHF 769
Samsung Galaxy S8
Midnight Black
CHF 569
Huawei P9
Mystic Silver
CHF 272

Transformed Dataset:

Product
Color
Price
Apple iPhone 6s
Dark Grey
CHF 769
Samsung Galaxy S8
Black
CHF 569
Huawei P9
Silver
CHF 272


In order to transform the dataset into the desired format we need to create a dictionary like this one below:

From
To
Anthracite
Dark Grey
Midnight Black
Black
Mystic Silver
Silver

Validations
The created dictionary should not contain any:
Clones: N identical rows in the dictionary.
Forks: N rows in the dictionary with the same ‘Form’ but with different ‘To’’ .
Functional Requirements
Creating and deleting dictionaries
Showing available dictionaries in an overview 
Editing dictionaries (adding, updating and removing rows)
Validating the entire dictionary regarding consistency (see above)
Validations should be shown as some kind of problem markers. (see Validations here below)
Technical Requirements
Single page web application using React
Mobx or Redux as state management library.
Typescript
Unit tests

      </div>
    )
  }
}
