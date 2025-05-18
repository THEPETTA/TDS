import time
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

def process_data():
    logging.info("Starting data processing...")
    data = [x ** 2 for x in range(1000000)]
    logging.info("Data processing complete")

def divide_numbers(a, b):
    try:
        logging.info("Dividing", a, b)
        return a / b
    except ZeroDivisionError as e:
        logging.info(f"Error occurred:{str(e)}")
        return None

print(divide_numbers(10, 0))


# if __name__ == "__main__":
#     start = time.time()
#     process_data()
#     time.sleep(2)
#     logging.info(f"Execution time: {time.time() - start} seconds")
