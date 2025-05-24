from bs4 import BeautifulSoup

html_content = '''
<ul class="products d-none">
        <li class="featured sale" data-discount="9"></li>
        <li class="sale" data-discount="11"></li>
        <li class="featured" data-discount="28"></li>
        <li class="sale featured" data-discount="11"></li>
        <li class="sale vip" data-discount="27"></li>
        <li class="sale featured" data-discount="49"></li>
        <li class="featured" data-discount="17"></li>
        <li class="featured new" data-discount="41"></li>
        <li class="new" data-discount="19"></li>
        <li class="sale" data-discount="29"></li>
        <li class="sale vip" data-discount="17"></li>
        <li class="featured new" data-discount="44"></li>
        <li class="sale vip" data-discount="15"></li>
        <li class="sale featured" data-discount="14"></li>
        <li class="sale vip" data-discount="22"></li>
        <li class="featured" data-discount="23"></li>
        <li class="sale" data-discount="46"></li>
        <li class="on-sale" data-discount="34"></li>
        <li class="featured" data-discount="38"></li>
        <li class="new" data-discount="15"></li>
      </ul>
'''

soup = BeautifulSoup(html_content, 'html.parser')

# Select elements with both 'featured' and 'sale' classes
featured_sale_items = soup.select('li.featured.sale')

# Sum their data-discount values
sum_discounts = sum(int(item['data-discount']) for item in featured_sale_items)

print(sum_discounts)