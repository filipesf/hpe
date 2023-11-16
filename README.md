# HPE Task

This repository serves as a guide for Propylon's front-end challenge.

1. Start by installing the necessary packages by running `npm install`.
2. Then run `npm start`.

Below you can find the check list of what was accomplished on this test.

- [ ] Implement pagination support.
- [x] Implement dropdown for the user profile button. See attached screenshot (coding-challenge-dropdown.png)
- [x] For the listings, randomly assign whether a listing should be considered a “Low rate”, “Usually booked”, or no special designation.
- [x] For the listings, use a date range of your choosing to display and a total cost.
- [x] While the designer didn’t give any additional designs for mobile, the interface should present nicely across various screen sizes. Use your design eye to determine what layout changes might need to be made.
- [x] Implement hover or focus states for interactive elements.

## Potential Enhancements

In light of time constraints and the challenge's specific scope, a few tasks were skipped. In a real-world scenario and with adequate time, these aspects could be explored:

- [ ] I would move the `URL` to a constants file or an environment configuration for easier management and change.
- [ ] I would ensure that interactive elements like buttons and links are accessible, including proper ARIA labels and keyboard navigation support with `react-aria`.
- [ ] In my `useEffect`, I would avoid depending on the entire fetchData object. Instead, I would destructure isLoading and data outside the `useEffect` and use them as dependencies to prevent unnecessary re-renders.
- [ ] I would move the `getInitials` function outside of the `Profile` component. This would ensure that the function is not recreated every time the component re-renders, which is more efficient.
- [ ] I would extracting the logic for fetching data, checking bookmarked items, and handling bookmarking into custom hooks. This would make the `App` component cleaner and more focused on rendering logic.
- [ ] `useFetchData` could encapsulate the logic of fetching and setting homes.
- [ ] I could also create `useBookmark` hook to handle bookmarking functionality.
