## Installation
```
composer require ivanradojevic/urldesk
```
## Usage

```
php artisan migrate

//NovaServiceProvider
use Trinityrank\Urldesk\Urldesk;

public function tools()
{
	return [
		new Urldesk,
	];
}
```
