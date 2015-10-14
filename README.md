![image](https://cloud.githubusercontent.com/assets/5514007/10447467/58437766-718d-11e5-9be4-968e2182daf4.png)
> js0n is a testing platform for services utilizing JavaScript Object Notation (JSON)

[![Dependency Status](https://david-dm.org/OmerHerera/js0n.svg?theme=shields.io)](https://david-dm.org/OmerHerera/js0n)
[![devDependency Status](https://david-dm.org/OmerHerera/js0n/dev-status.svg?theme=shields.io)](https://david-dm.org/OmerHerera/js0n#info=devDependencies)
[![npm version](https://badge.fury.io/js/js0n.svg)](http://badge.fury.io/js/js0n)
[![npm downloads](https://img.shields.io/npm/dm/js0n.svg)](https://img.shields.io/npm/dm/js0n.svg)
[![NPM](https://nodei.co/npm/js0n.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/js0n/)

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

[Headers](https://js0n.herokuapp.com/headers)

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

## MD5

Returns the MD5 hash code of a given string. To use, call https://js0n.herokuapp.com/md5/textText, where example_text is the text that you want the MD5 hash for. For example, the above request would return:
```
{
	md5: "fa4c6baa0812e5b5c80ed8885e55a8a6",
	original: "example_text"
}
```
Endpoint: ```http://js0n.herokuapp.com/md5/textText```

[MD5](https://js0n.herokuapp.com/md5/textText)

# Methods
Platform support both GET/POST methods
