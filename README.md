# Komikcast-api

Sebuah program yang dibuat dengan node.js dan express.js untuk mendapatkan data
dari [ Komikcast ](https://komikcast03.com/)

# Endpoints
Endpoint yang tersedia adalah
| Endpoints    | Return |
|---------|------------------|
| api/manga | return title and desc           |
| api/manga/genre | return genre         |
| api/manga/meta | return meta         |
| api/manga/details| return all data from 3 endpoints before       |

## Example request
> **untuk mengakses sebuah komik diperlukan slug, sebuah kode unik dari komik**

| Example |
|---------|
| *http://localhost:3000/api/manga* |

# Licensi
Projek ini dilisensikan oleh [ MIT ] (https://github.com/etern4lzz/Komikcast-api/blob/etern4lzz-patch-1/LICENSE)
