import logging

# Configure logging to write to a file
logging.basicConfig(filename="app.log", level=logging.DEBUG, 
                    format="%(asctime)s - %(levelname)s - %(message)s")

def add(a, b):
    logging.debug(f"Adding {a} and {b}")
    return a + b

if __name__ == "__main__":
    logging.debug("Starting the add operation...")
    result = add(10, 20)
    logging.debug(f"Result: {result}")
