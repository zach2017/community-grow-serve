from flask import Flask, request, jsonify, render_template_string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory storage for demonstration (use a database in production)
orders = []

@app.route('/')
def index():
    """Serve the HTML form"""
    return render_template_string(HTML_TEMPLATE)

@app.route('/api/orders', methods=['POST'])
def create_order():
    """Handle form submission and create a new order"""
    try:
        # Get form data
        name = request.form.get('name', '').strip()
        product = request.form.get('product', '').strip()
        qty = request.form.get('qty', '').strip()
        
        # Validate input
        if not name:
            return jsonify({'error': 'Name is required'}), 400
        if not product:
            return jsonify({'error': 'Product is required'}), 400
        if not qty:
            return jsonify({'error': 'Quantity is required'}), 400
        
        # Validate quantity is a positive integer
        try:
            qty_int = int(qty)
            if qty_int <= 0:
                return jsonify({'error': 'Quantity must be a positive number'}), 400
        except ValueError:
            return jsonify({'error': 'Quantity must be a valid number'}), 400
        
        # Create order object
        order = {
            'id': len(orders) + 1,
            'name': name,
            'product': product,
            'quantity': qty_int
        }
        
        # Store order
        orders.append(order)
        
        # Return success response
        return jsonify({
            'message': 'Order created successfully',
            'order': order
        }), 201
        
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/orders', methods=['GET'])
def get_orders():
    """Get all orders"""
    return jsonify({'orders': orders})

@app.route('/api/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    """Get a specific order by ID"""
    order = next((o for o in orders if o['id'] == order_id), None)
    if order:
        return jsonify({'order': order})
    return jsonify({'error': 'Order not found'}), 404

# HTML template for the form
HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        input[type="text"], input[type="number"], select {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
        }
        input:focus, select:focus {
            border-color: #4CAF50;
            outline: none;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        button:hover {
            background-color: #45a049;
        }
        .response {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            display: none;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .orders-section {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #eee;
        }
        .order-item {
            background: #f8f9fa;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border-left: 4px solid #4CAF50;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Product Order Form</h1>
        
        <form id="orderForm">
            <div class="form-group">
                <label for="name">Customer Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="product">Product:</label>
                <select id="product" name="product" required>
                    <option value="">Select a product...</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Headphones">Headphones</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="qty">Quantity:</label>
                <input type="number" id="qty" name="qty" min="1" required>
            </div>
            
            <button type="submit">Submit Order</button>
        </form>
        
        <div id="response" class="response"></div>
        
        <div class="orders-section">
            <h2>Recent Orders</h2>
            <button onclick="loadOrders()" style="margin-bottom: 20px; width: auto; padding: 8px 16px;">Refresh Orders</button>
            <div id="ordersList"></div>
        </div>
    </div>

    <script>
        document.getElementById('orderForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const responseDiv = document.getElementById('response');
            
            try {
                const response = await fetch('/api/orders', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    responseDiv.className = 'response success';
                    responseDiv.innerHTML = `
                        <h3>Order Successful!</h3>
                        <p><strong>Order ID:</strong> ${data.order.id}</p>
                        <p><strong>Customer:</strong> ${data.order.name}</p>
                        <p><strong>Product:</strong> ${data.order.product}</p>
                        <p><strong>Quantity:</strong> ${data.order.quantity}</p>
                    `;
                    this.reset(); // Clear form
                    loadOrders(); // Refresh orders list
                } else {
                    responseDiv.className = 'response error';
                    responseDiv.innerHTML = `<strong>Error:</strong> ${data.error}`;
                }
                
                responseDiv.style.display = 'block';
                
            } catch (error) {
                responseDiv.className = 'response error';
                responseDiv.innerHTML = `<strong>Error:</strong> Could not submit order. Please try again.`;
                responseDiv.style.display = 'block';
            }
        });
        
        async function loadOrders() {
            try {
                const response = await fetch('/api/orders');
                const data = await response.json();
                
                const ordersList = document.getElementById('ordersList');
                
                if (data.orders && data.orders.length > 0) {
                    ordersList.innerHTML = data.orders.map(order => `
                        <div class="order-item">
                            <strong>Order #${order.id}</strong> - ${order.name}<br>
                            Product: ${order.product} | Quantity: ${order.quantity}
                        </div>
                    `).join('');
                } else {
                    ordersList.innerHTML = '<p>No orders yet.</p>';
                }
            } catch (error) {
                document.getElementById('ordersList').innerHTML = '<p style="color: red;">Error loading orders.</p>';
            }
        }
        
        // Load orders when page loads
        loadOrders();
    </script>
</body>
</html>
'''

if __name__ == '__main__':
    print("Starting Flask API server...")
    print("API Endpoints:")
    print("- GET  /           : HTML form page")
    print("- POST /api/orders : Create new order")
    print("- GET  /api/orders : Get all orders")
    print("- GET  /api/orders/<id> : Get specific order")
    print("\nServer running at: http://localhost:5000")
    
    app.run(debug=True, host='0.0.0.0', port=5000)