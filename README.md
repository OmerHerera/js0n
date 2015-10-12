![image](https://cloud.githubusercontent.com/assets/5514007/10438312/9bf6b83a-713b-11e5-90bf-327d2aeaf066.png)

# js0n
> js0n is a testing platform for services utilizing JavaScript Object Notation (JSON)

#Services

## Echo JSON
Returns a customized JSON object that you can define through a REST-style URL. For example, calling ```https://js0n.herokuapp.com/echo?name=omer&id=2&project=js0n``` will return the following
JSON:

```
{
	name: "omer",
	id: "2",
	project: "js0n"
}
```
Endpoint: ```https://js0n.herokuapp.com/echo?name=omer&id=2&project=js0n```

[Echo JSON](https://js0n.herokuapp.com/echo?name=omer&id=2&project=js0n)


## Headers

Returns the HTTP request headers received from the client.

```
{
	host: "localhost:3000",
	connection: "keep-alive",
	accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
	upgrade-insecure-requests: "1",
	user-agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like 	Gecko) Chrome/40.0.2454.101 Safari/537.39",
	accept-encoding: "gzip, deflate, sdch",
	accept-language: "en-US,en;q=0.8",
	cookie: "wm-ueug="3c12cd2e-912d-b642-857c-2acd37e535464"",
	if-none-match: "W/"1b8-BNvdbtFq5G8GN3K68Ae5tg""
}
```
Endpoint: ```https://js0n.herokuapp.com/headers```

[Echo JSON](https://js0n.herokuapp.com/headers)

## Date & Time

Returns a JSON object with the current date and time in human-readable form, and the current number of milliseconds since epoch (The Unix epoch (is the number of seconds that have elapsed since January 1, 1970).

```
{
	date: "Mon Oct 12 2015",
	time: "10:38:37 PM",
	milliseconds_since_epoch: 1444678717275
}
```
Endpoint: ```https://js0n.herokuapp.com/date```

[Echo JSON](https://js0n.herokuapp.com/date)

## Validation

Validates a given JSON object.

Valid JSON:

```
{
	validate: true,
	original: "{"name":"omer", "id": 1234567}",
	size: 2
}
```
Endpoint: ```https://js0n.herokuapp.com/validate/{"name":"omer","id":1234567}```

[Validation](https://js0n.herokuapp.com/validate/{"name":"omer","id":1234567})

Invalid JSON:

```
{
	validate: false,
	original: "notJson",
	error_info: "not a valid JSON"
}
```

Endpoint: ```https://js0n.herokuapp.com/validate/notJson```

[Validation](https://js0n.herokuapp.com/validate/notjson)
