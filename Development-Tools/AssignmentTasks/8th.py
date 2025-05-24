from datetime import datetime, timedelta

start_date = datetime.strptime('1987-11-30', '%Y-%m-%d')
end_date = datetime.strptime('2015-10-16', '%Y-%m-%d')

weekend_count = 0
current_date = start_date

while current_date <= end_date:
    if current_date.weekday() == 5 or current_date.weekday() == 6:  # 5 is Saturday, 6 is Sunday
        weekend_count += 1
    current_date += timedelta(days=1)

print(weekend_count)