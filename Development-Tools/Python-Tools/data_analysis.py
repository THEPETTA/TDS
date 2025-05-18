import logging
import pandas as pd

# Configure logging to write to a file
logging.basicConfig(filename="app.log", level=logging.DEBUG, 
                    format="%(asctime)s - %(levelname)s - %(message)s")

def analyze_data(file_path):
    logging.debug(f"Loading data from: {file_path}")
    
    try:
        data = pd.read_csv(file_path)
        logging.debug("Data loaded successfully. Analyzing...")
        summary = data.describe()
        logging.debug(f"Data summary:\n{summary}")
        return summary
    except FileNotFoundError:
        logging.error(f"File not found: {file_path}")
    except Exception as e:
        logging.error(f"Error while analyzing data: {str(e)}")

if __name__ == "__main__":
    logging.debug("Starting data analysis...")
    # Create a sample data.csv file with random data or adjust the file path as needed
    analyze_data("data.csv")
