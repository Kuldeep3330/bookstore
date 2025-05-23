# bookstore

# public folder for keeping images and heavy resources

## APP STRUCTURE

## SRC Folder

    |app.js
    |constants.js
    |index.js

controllers/ # Route logic
db/ # database connection setup
middlewares/ # Error, logging, auth etc.
models/ # Database modelling
routes/ # Express routers
utils/ # Helper functions

# eslint setup npm i -D eslint

# npx eslint --init

# prettier setup npm i -D prettier

    |.prettierrc
    |.prettierignore

db/
|->index.js

index.js # App entry point
app.js # Express app setup

utils/ # Helper functions
|->ApiError.js # Central error handler (no more try/catch everywhere)
|->ApiResponse.js
|->asyncHandler.js

models/
|->book.model.js # Create Mongoose Models (done)
|->book.controller.js # Controller Logic for Books (Add, Get, Update, Delete)
|->book.routes.js # Define and Register the Book API routes (CRUD)

    |->user.model.js
        |->bcrypt
        |->Jsonwebtoken
            |->Add JWT Secret in .env
                |->auth.controller.js # Create Auth Controller
                |->auth.routes.js #  Auth Routes

middlewares/ # Error, logging, auth etc.
|->auth.middleware.js # Create JWT Auth Middleware
|->book.routes.js # Use Middleware in Routes

        |->book.controller.js # Update the getAllBooks Controller with Pagination & Filtering (🎯 Pagination & Filtering is crucial for scalability and great user experience)
            |->expose these filters in a dropdown/search bar on frontend later:1.Category dropdown 2.Price range slider 3.Search bar

    |->wishlist.model.js
        |->wishlist.controller.js # add , remove get the wishlist
        |->wishlist.routes.js
    |->cart.model.js
        |->cart.controller.js # add , remove and get the cart
        |->cart.routes.js


    |-> order.model.js # Checkout and Order System
        |->order.controller.js
        |->order.routes.js
            |-> Optional (Future Enhancements)
            |-> Integrate Stripe or Razorpay for real payments
            |->Add Admin dashboard to manage all orders
            |->Add email notifications on successful order

    |->Admin panel

    |->utils
        |->invoice.js
            |->Invoice generation (We'll use pdfkit to generate PDF invoices.)
            |->order.controller.js
                |->Download Invoice API (Optional)
                |->Update Checkout Logic # checkout controller (after order is saved)(not sure where to place it)

🔄 Refresh token + cookie-based auth (optional)

🧑‍💼 Admin vs User roles (RBAC)

📚 Pagination, sorting, filtering for books(done)

🛒 Add Cart or Wishlist feature(done)
💳 Checkout and Order System(done)

🧾 Invoice generation

🚀 Redis caching for bestsellers / frequently viewed books 📦 Add Redis or Kafka for caching/events

🧪 Write unit tests (Jest/Supertest)

🚢 Dockerize the app and deploy to cloud
