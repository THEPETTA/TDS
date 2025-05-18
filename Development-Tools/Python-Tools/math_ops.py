import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

def multiply(a, b):
    logging.info(f"Multiplying {a} and {b}")
    return a * b

def divide(a, b):
    logging.info(f"Dividing {a} by {b}")
    if b == 0:
        logging.error("Division by zero is undefined")
        raise ValueError("Division by zero is undefined")
    return a / b

if __name__ == "__main__":
    logging.info("Starting math operations...")
    print(multiply(5, 3))
    print(divide(10, 0))
