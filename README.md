## Installation
```
composer require trinityrank/urldesk
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
