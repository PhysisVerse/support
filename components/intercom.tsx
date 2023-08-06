import { useEffect } from 'react';
import { IIntercom } from '../types/intercom';
interface IntercomProps {
  appId: string;
}

const Intercom: React.FC<IntercomProps> = ({ appId }) => {
  useEffect(() => {
  window.intercomSettings = {
	app_id: appId,
  };

  (function () {
	var w = window;
	var ic = w.Intercom;
	if (typeof ic === 'function') {
	  ic('reattach_activator');
	  ic('update', w.intercomSettings);
	} else {
	  var d = document;
	  var i: IIntercom = function () {
		i.c!(arguments as any);
	  };
	  i.q = [];
	  i.c = function (args: any) {
		i.q!.push(args);
	  };
	  w.Intercom = i;

	  var l = function () {
		var s = d.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.src = 'https://widget.intercom.io/widget/' + appId;
		var x = d.getElementsByTagName('script')[0];
		x.parentNode.insertBefore(s, x);
	  };
	  w.addEventListener('load', l, false); // using addEventListener instead of attachEvent
	}
  })();
}, [appId]);


  return null;
};

export default Intercom;
