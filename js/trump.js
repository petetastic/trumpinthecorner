function hasIOS12()
{
	var iOS = /iP(hone|od|ad)/.test(navigator.userAgent) && !window.MSStream;
	if ( iOS ) {
		var version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		version = parseInt(version[1], 10);
		return ( version >= 12 )
	}
}

if (hasIOS12())
{
	document.getElementById('arContent').classList.remove('d-none');
	document.getElementById('arContent').classList.add('d-flex');
	document.getElementById('noArContent').classList.remove('d-flex');
	document.getElementById('noArContent').classList.add('d-none');
}
else
{
	document.getElementById('arContent').classList.remove('d-flex');
	document.getElementById('arContent').classList.add('d-none');
	document.getElementById('noArContent').classList.remove('d-none');
	document.getElementById('noArContent').classList.add('d-flex');
}
