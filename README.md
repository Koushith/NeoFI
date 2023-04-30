### NeoFi Frontend -WIP

This project is a UI implementation based on the given design using HTML, CSS, and JavaScript. It includes a first page with a real-time token value display and a second page with a token selector, real-time price display, and INR investment amount estimator.

#### Installation

To run the project, download or clone the repository and open the index.html file in your browser.

```bash
git clone https://github.com/your_username/NeoFi-frontend-developer-round-1-assignment.git
cd NeoFi-frontend-developer-round-1-assignment
```

#### Usage

- The first page displays the real-time value of the selected token. The value is fetched from the Binance websocket every second and displayed on the page.

- The second page displays a token selector dropdown with a search bar. The tokens are fetched from Binance and displayed in the dropdown. The real-time price and logo of the selected token are displayed above the dropdown.

- The second input box is disabled, and it displays the estimated amount of tokens the user will get based on the amount of INR they enter in the first input box. The estimation is updated in real-time as the user types in the INR input box.

#### Credits

Token logo images were downloaded from the web and used in the project.
Binance websocket API was used to fetch real-time token prices.
The design was provided by NeoFi.

#### Contributing

This is a completed assignment and contributions are not expected.

#### License

This project is licensed under the MIT license.
