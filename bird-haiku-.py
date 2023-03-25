import requests
from bs4 import BeautifulSoup
import random

def get_bird_words():
    url = 'https://www.audubon.org/news/the-audubon-dictionary-birders'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    bird_words = [word.text for word in soup.select('li strong')]
    return bird_words

def generate_haiku():
    bird_words = get_bird_words()
    haiku = []
    haiku.append(' '.join(random.choices(bird_words, k=5)))
    haiku.append(' '.join(random.choices(bird_words, k=7)))
    haiku.append(' '.join(random.choices(bird_words, k=5)))
    return '\n'.join(haiku)

print(generate_haiku())
