import scrapy
from scrapyProject.items.meli_item import MeliItem
from scrapyProject.item_loaders import MeliItemLoader
from scrapyProject.urls_manager import generate_urls_meli, check_url_status
import logging

class MeliSpiderSpider(scrapy.Spider):
    name = "meli"
    categories = [
        '/eletrodomesticos/refrigeracao/geladeiras/geladeira',
        '/celulares-telefones/celulares-smartphones/celulares-smartphones',
        '/eletronicos-audio-video/televisores/tv'
    ]
    number_of_pages = 41
    urls = generate_urls_meli(categories, number_of_pages)
    start_urls = check_url_status(urls)

    def parse(self, response):
        # XPath expression adapted to target <li> elements within the specified <ol>
        ol_path = "//div[contains(@class,'ui-search-main--only-products')]//section/ol/li"
        for li in response.xpath(ol_path):
            # Initialize your item loader with each <li>
            loader = MeliItemLoader(item=MeliItem(), selector=li)
            
            # Adjust these XPaths based on the actual data structure
            loader.add_xpath('description', './/div[contains(@class, "ui-search-item__group--title")]//h2/text()')
            
            # Updated XPath for price extraction
            loader.add_xpath('price', './/span[contains(@class, "andes-money-amount__fraction")]/text()')
            
            loader.add_xpath('link', './/div[contains(@class, "ui-search-result__content-wrapper")]//a/@href')
            loader.add_xpath('image', './/img[contains(@class, "ui-search-result-image__element")]/@src')
            loader.add_value('category', response.url.split("/")[3].split("?")[0])
            loader.add_value('website', 'Mercado Livre')

            yield loader.load_item()
