// this is the input for new review, utlizies a forms
//button under the list
//opens up modal window named wite your review about product name

import React from 'react';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // these go in the form brackert action = '/thewebsitehere' (similar to fetching) method = 'post'
      <form className="newReview">
        What would you rate this item?* mandatory
        {/* somehow have to connect this to stars */}
        <div name="newRating" required>
          <input type="radio" name="poor" /> Poor
          <input type="radio" name="fair" /> Fair
          <input type="radio" name="average" /> Average
          <input type="radio" name="good" /> Good
          <input type="radio" name="great" /> Great
          <br />
        </div>
        Do you recommend this product?* mandatory
        <div name="newRecommend" required>
          <input type="radio" name="yesRecommend" /> Yes
          <input type="radio" name="noRecommend" /> No
          <br />
        </div>
        <input type="text" name="newCharecteristics" required /> charecteristics
        -m
        <br />
        Review Summary
        <br />
        <input type="text" name="newSummary" />
        <br />
        Your Review* - mandatory
        <br />
        <textArea name="newBody" rows="10" cols="40" required />
        <br />
        Submit your photos here
        <br />
        <input type="file" name="newPhotos" accept="image/*" />
        <br />
        Your Name * mandatory & will be shared
        <br />
        <input type="text" name="newName" required />
        <br />
        Your email * mandatory will not be shared
        <br />
        <input type="email" name="newEmail" required />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default NewReview;

// overall rating (mandatory)- empty stars appear click to fill on them (fractions allowed)

//recomned (mandatory)- radio button y/n

//Characteristics (mandatory)- 5 radio buttons look on sheet

//Review summary - A text input allowing up to 60 characters.

// Review body (mandatory)- A text input allowing up to 1000 characters.
// Placeholder text should read: “Why did you like the product or not?”.
// The review must be over 50 characters long in order to be submitted.   If the user tries to submit a review shorter that 50 characters, then the submission should fail in the same manner as it would for a blank mandatory field. reuires counter thats dolled out on list page (get that)

//  Upload your photos-  A button will appear allowing users to upload their photos to the form.
// Clicking the button should open a separate window where the photo to be can be selected.
// After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.

// What is your nickname (mandatory)- A text input allowing up to 60 characters for the user’s display name.Placeholder text should read: “Example: jackson11!”. Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.

// Your email (mandatory)- A text input allowing up to 60 characters.  Placeholder text should read: “Example: jackson11@email.com”. Below this field, the text “For authentication reasons, you will not be emailed” will appear.

//Submit review (button) - A button by which the review can be submitted.Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.   This message should be titled “You must enter the following:”
//This error will occur if:
// Any mandatory fields are blank
// The review body is less than 50 characters
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.
