import csv
import pandas as pd

print("Hello World!")
print("Hello Again")
print("I like typing this.")
print("This is fun.")

# function to load a csv file into a list of lists
def load_csv(filename):
    with open(filename, "r") as f:
        reader = csv.reader(f)


# function to load csv file into a pandas dataframe
def load_csv_pd(filename):
    df = pd.read_csv(filename)
    return df


# function to load csv file into a pandas dataframe
# select columns Name, Age, and Address
def load_csv_pd_columns(filename):
    df = pd.read_csv(filename, usecols=["Name", "Age", "Address"])
    return df

# unit test for load_csv function
def test_load_csv():
    assert load_csv('test.csv') == [['Name', 'Age', 'Address'], ['John', '20', 'New York'], ['Jane', '21', 'Paris']]

# unit test for load_csv_pd function
def test_load_csv_pd():
    assert load_csv_pd('test.csv') == [['Name', 'Age', 'Address'], ['John', '20', 'New York'], ['Jane', '21', 'Paris']]