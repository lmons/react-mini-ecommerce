# React E-commerce Application

## Table of Contents

- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [Architecture](#architecture)
- [Additional Information](#additional-information)

## Overview

This is a React-based e-commerce application that allows users to browse products, add them to a shopping cart, and manage their orders.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lmons/react-mini-ecommerce.git
   cd react-mini-ecommerce
   
2. **Install dependencies:**

    ```bash
    npm install

3. **Start the development server:**

    ```bash
    npm start

Open your browser:

Visit http://localhost:3000 to view the application.

## Features
- **Browse and view a list of products**
- **Add products to the shopping cart**
- **View details of individual products**
- **Search products by name**
- **Filter products by category or price range**
- **Responsive design for mobile and desktop**
- **Calculate total price in the shopping cart**
- **Checkout process (if implemented)**

## Architecture

- **The application architecture includes:**

**Components:** React components for UI elements like product list, product details, filters, and shopping cart.

**Contexts:** CartContext for managing shopping cart state and Filters for filtering products based on category, price, and search term.

**Services:** API services (apiService.js) to fetch products from the Fake Store API and handle category filtering.

**Routing:** Uses react-router-dom for routing between product list, product details, and cart pages.

**Styling:** Bootstrap 5 for responsive design and basic styling, with additional custom CSS for specific components.

## Additional Information
Deployment: you can see live demo from this link https://lmons.github.io/react-mini-ecommerce/