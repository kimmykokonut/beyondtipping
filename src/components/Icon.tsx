import { Link } from 'react-router-dom';

function Icon(props: IconProps) {
	const width = props.size === 'sm' ? 370 / 1.5 : 370;
	const height = props.size === 'sm' ? 40 / 1.5 : 40;

	return (
		<Link to={'/'}>
			<svg
				width={width}
				height={height}
				viewBox="0 0 90.09372 12.44575"
				version="1.1"
				id="svg5"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg">
				<defs id="defs2" />
				<g
					id="layer1"
					transform="translate(-9.2911091,-121.94029)">
					<g
						aria-label="beyondtipping"
						id="text236"
						fill="#fffbeb"
						stroke-width="0.79375"
            >
						<path
							id="path5142"
							d="m 10.002177,121.94029 c -0.1947333,0 -0.3640463,0.0721 -0.5079795,0.21601 -0.1354665,0.14393 -0.2030884,0.31324 -0.2030884,0.50798 v 8.07702 c 0,0.19474 0.067622,0.36405 0.2030884,0.50798 0.1439332,0.14394 0.3132462,0.21601 0.5079795,0.21601 h 0.482658 c 0.203199,0 0.372512,-0.0676 0.507979,-0.20309 0.143933,-0.14393 0.22046,-0.3177 0.228927,-0.5209 v -0.10128 c 0,-0.008 0.0039,-0.0129 0.0124,-0.0129 l 0.02532,0.0253 c 0.5334,0.62653 1.202264,0.93999 2.006596,0.93999 0.753533,0 1.371551,-0.30062 1.854151,-0.90175 0.482599,-0.6096 0.723986,-1.45223 0.723986,-2.52749 0,-1.10067 -0.232482,-1.94723 -0.698148,-2.5399 -0.465666,-0.59267 -1.09259,-0.88884 -1.879989,-0.88884 -0.694266,0 -1.325125,0.25817 -1.892391,0.77463 -0.0085,0.008 -0.01685,0.0124 -0.02532,0.0124 -0.0085,0 -0.0124,-0.004 -0.0124,-0.0124 v -2.84478 c 0,-0.19474 -0.07207,-0.36405 -0.216008,-0.50798 -0.135466,-0.14394 -0.300844,-0.21601 -0.495577,-0.21601 z m 40.983028,0 c -0.194733,0 -0.364046,0.0721 -0.507979,0.21601 -0.135467,0.14393 -0.203089,0.31324 -0.203089,0.50798 v 2.84478 c 0,0.008 -0.0045,0.0124 -0.01292,0.0124 -0.0085,0 -0.01685,-0.004 -0.02532,-0.0124 -0.567266,-0.51646 -1.198125,-0.77463 -1.892391,-0.77463 -0.787399,0 -1.413806,0.29617 -1.879472,0.88884 -0.465666,0.59267 -0.698665,1.43923 -0.698665,2.5399 0,1.07526 0.241387,1.91789 0.723986,2.52749 0.4826,0.60113 1.100618,0.90175 1.854151,0.90175 0.804332,0 1.473196,-0.31346 2.006596,-0.93999 l 0.02532,-0.0253 c 0.0085,0 0.01292,0.004 0.01292,0.0129 v 0.10128 c 0.0085,0.2032 0.08054,0.37697 0.216008,0.5209 0.143933,0.13547 0.317182,0.20309 0.520381,0.20309 h 0.482658 c 0.194733,0 0.360111,-0.0721 0.495577,-0.21601 0.143933,-0.14393 0.216008,-0.31324 0.216008,-0.50798 v -8.07702 c 0,-0.19474 -0.07207,-0.36405 -0.216008,-0.50798 -0.135466,-0.14394 -0.300844,-0.21601 -0.495577,-0.21601 z m 10.934733,0 c -0.194733,0 -0.364046,0.0721 -0.507979,0.21601 -0.143933,0.14393 -0.216008,0.31324 -0.216008,0.50798 v 0.20309 c 0,0.19473 0.07207,0.36404 0.216008,0.50797 0.143933,0.14394 0.313246,0.21601 0.507979,0.21601 h 0.711068 c 0.194733,0 0.364046,-0.0721 0.507979,-0.21601 0.143933,-0.14393 0.216008,-0.31324 0.216008,-0.50797 v -0.20309 c 0,-0.19474 -0.07207,-0.36405 -0.216008,-0.50798 -0.143933,-0.14394 -0.313246,-0.21601 -0.507979,-0.21601 z m 20.193083,0 c -0.194733,0 -0.364046,0.0721 -0.50798,0.21601 -0.143933,0.14393 -0.216007,0.31324 -0.216007,0.50798 v 0.20309 c 0,0.19473 0.07207,0.36404 0.216007,0.50797 0.143934,0.14394 0.313247,0.21601 0.50798,0.21601 h 0.711067 c 0.194734,0 0.364047,-0.0721 0.50798,-0.21601 0.143933,-0.14393 0.216007,-0.31324 0.216007,-0.50797 v -0.20309 c 0,-0.19474 -0.07207,-0.36405 -0.216007,-0.50798 -0.143933,-0.14394 -0.313246,-0.21601 -0.50798,-0.21601 z m -62.052543,2.79414 c -1.049866,0 -1.853974,0.29617 -2.412773,0.88884 -0.550333,0.5842 -0.825273,1.43076 -0.825273,2.5399 0,1.11759 0.309009,1.96861 0.927076,2.55281 0.626532,0.5842 1.515555,0.87643 2.66702,0.87643 0.524933,0 1.032872,-0.0469 1.523938,-0.14004 0.2032,-0.0339 0.368061,-0.13504 0.49506,-0.30437 0.135467,-0.1778 0.203089,-0.3728 0.203089,-0.58446 v -0.0253 c 0,-0.1778 -0.07156,-0.32194 -0.215491,-0.43201 -0.135466,-0.11007 -0.292456,-0.14362 -0.470255,-0.10129 -0.440267,0.11007 -0.850967,0.16485 -1.231967,0.16485 -0.584199,0 -1.024516,-0.0972 -1.320849,-0.29197 -0.287867,-0.2032 -0.465568,-0.53789 -0.533301,-1.00356 -0.01693,-0.0762 0.01714,-0.1142 0.101803,-0.1142 h 3.391007 c 0.2032,0 0.380901,-0.0676 0.533301,-0.20309 0.160866,-0.14393 0.241329,-0.3177 0.241329,-0.5209 -0.03387,-2.20133 -1.05865,-3.30161 -3.073714,-3.30161 z m 13.741796,0 c -1.049865,0 -1.866813,0.30063 -2.451013,0.90176 -0.584199,0.60113 -0.876432,1.44324 -0.876432,2.52698 0,1.08373 0.292233,1.92636 0.876432,2.52749 0.5842,0.60113 1.401148,0.90175 2.451013,0.90175 1.049866,0 1.866814,-0.30062 2.451014,-0.90175 0.584199,-0.60113 0.876432,-1.44376 0.876432,-2.52749 0,-1.08374 -0.292233,-1.92585 -0.876432,-2.52698 -0.5842,-0.60113 -1.401148,-0.90176 -2.451014,-0.90176 z m 8.559685,0 c -0.770466,0 -1.430942,0.31295 -1.981275,0.93948 l -0.02532,0.0253 c -0.0085,0 -0.01292,-0.004 -0.01292,-0.0124 l -0.0124,-0.1018 c -0.0085,-0.2032 -0.08499,-0.37251 -0.228926,-0.50798 -0.135467,-0.14393 -0.30478,-0.21601 -0.50798,-0.21601 h -0.520381 c -0.194733,0 -0.364046,0.0721 -0.50798,0.21601 -0.135466,0.14393 -0.203605,0.31325 -0.203605,0.50798 v 5.15627 c 0,0.19474 0.06814,0.36405 0.203605,0.50798 0.143934,0.14394 0.313247,0.21601 0.50798,0.21601 h 0.622184 c 0.194733,0 0.359594,-0.0721 0.49506,-0.21601 0.143933,-0.14393 0.216008,-0.31324 0.216008,-0.50798 v -3.25096 c 0,-0.2794 0.12292,-0.53756 0.368453,-0.77463 0.253999,-0.24553 0.528939,-0.36845 0.825272,-0.36845 0.3556,0 0.60144,0.0972 0.736906,0.29197 0.135467,0.18626 0.203089,0.53328 0.203089,1.04128 v 3.06079 c 0,0.19474 0.07207,0.36405 0.216007,0.50798 0.143933,0.14394 0.313246,0.21601 0.507979,0.21601 h 0.558623 c 0.194733,0 0.36011,-0.0721 0.495577,-0.21601 0.143933,-0.14393 0.21549,-0.31324 0.21549,-0.50798 v -3.12435 c 0,-1.04987 -0.169313,-1.79029 -0.507979,-2.22209 -0.338666,-0.44027 -0.892998,-0.66043 -1.663464,-0.66043 z m 26.962178,0 c -0.761999,0 -1.414087,0.31295 -1.955953,0.93948 l -0.02532,0.0253 c -0.0085,0 -0.01292,-0.004 -0.01292,-0.0124 v -0.1018 c -0.0085,-0.2032 -0.08448,-0.37251 -0.22841,-0.50798 -0.143933,-0.14393 -0.317699,-0.21601 -0.520899,-0.21601 h -0.507979 c -0.194733,0 -0.364046,0.0721 -0.507979,0.21601 -0.143933,0.14393 -0.216008,0.31325 -0.216008,0.50798 v 7.95042 c 0,0.19473 0.07207,0.36404 0.216008,0.50798 0.143933,0.14393 0.313246,0.216 0.507979,0.216 h 0.609782 c 0.194733,0 0.364046,-0.0721 0.507979,-0.216 0.143934,-0.14394 0.216008,-0.31325 0.216008,-0.50798 v -2.71767 c 0,-0.008 0.0039,-0.0129 0.0124,-0.0129 0.0085,0 0.01737,0.004 0.02584,0.0129 0.550333,0.51647 1.17674,0.77463 1.879472,0.77463 0.753533,0 1.371551,-0.30507 1.854151,-0.91467 0.491066,-0.6096 0.736389,-1.44778 0.736389,-2.51457 0,-1.10067 -0.236935,-1.94723 -0.711068,-2.5399 -0.465666,-0.59267 -1.092073,-0.88884 -1.879472,-0.88884 z m 7.861019,0 c -0.761999,0 -1.41357,0.31295 -1.955436,0.93948 l -0.02584,0.0253 c -0.0085,0 -0.0124,-0.004 -0.0124,-0.0124 v -0.1018 c -0.0085,-0.2032 -0.08499,-0.37251 -0.228926,-0.50798 -0.143933,-0.14393 -0.317182,-0.21601 -0.520382,-0.21601 h -0.507979 c -0.194733,0 -0.364046,0.0721 -0.50798,0.21601 -0.143933,0.14393 -0.216007,0.31325 -0.216007,0.50798 v 7.95042 c 0,0.19473 0.07207,0.36404 0.216007,0.50798 0.143934,0.14393 0.313247,0.216 0.50798,0.216 h 0.609265 c 0.194733,0 0.364563,-0.0721 0.508496,-0.216 0.143933,-0.14394 0.215491,-0.31325 0.215491,-0.50798 v -2.71767 c 0,-0.008 0.0045,-0.0129 0.01292,-0.0129 0.0085,0 0.01686,0.004 0.02532,0.0129 0.550333,0.51647 1.17674,0.77463 1.879472,0.77463 0.753533,0 1.371551,-0.30507 1.854151,-0.91467 0.491066,-0.6096 0.736905,-1.44778 0.736905,-2.51457 0,-1.10067 -0.236934,-1.94723 -0.711067,-2.5399 -0.465666,-0.59267 -1.09259,-0.88884 -1.879989,-0.88884 z m 12.357385,0 c -0.770466,0 -1.430941,0.31295 -1.981274,0.93948 l -0.02532,0.0253 c -0.0085,0 -0.01292,-0.004 -0.01292,-0.0124 l -0.0124,-0.1018 c -0.0085,-0.2032 -0.08499,-0.37251 -0.228927,-0.50798 -0.135466,-0.14393 -0.304779,-0.21601 -0.507979,-0.21601 h -0.520382 c -0.194733,0 -0.364562,0.0721 -0.508496,0.21601 -0.135466,0.14393 -0.203088,0.31325 -0.203088,0.50798 v 5.15627 c 0,0.19474 0.06762,0.36405 0.203088,0.50798 0.143934,0.14394 0.313763,0.21601 0.508496,0.21601 h 0.622185 c 0.194733,0 0.359593,-0.0721 0.49506,-0.21601 0.143933,-0.14393 0.216007,-0.31324 0.216007,-0.50798 v -3.25096 c 0,-0.2794 0.12292,-0.53756 0.368453,-0.77463 0.254,-0.24553 0.52894,-0.36845 0.825273,-0.36845 0.3556,0 0.601439,0.0972 0.736906,0.29197 0.135466,0.18626 0.203088,0.53328 0.203088,1.04128 v 3.06079 c 0,0.19474 0.07207,0.36405 0.216008,0.50798 0.143933,0.14394 0.313246,0.21601 0.507979,0.21601 h 0.558622 c 0.194734,0 0.359594,-0.0721 0.495061,-0.21601 0.143933,-0.14393 0.216007,-0.31324 0.216007,-0.50798 v -3.12435 c 0,-1.04987 -0.169313,-1.79029 -0.507979,-2.22209 -0.338667,-0.44027 -0.892999,-0.66043 -1.663465,-0.66043 z m 5.943307,0 c -0.778933,0 -1.396951,0.28779 -1.854151,0.86352 -0.457199,0.57573 -0.685746,1.38823 -0.685746,2.43809 0,1.02447 0.236935,1.83303 0.711068,2.42569 0.482599,0.5842 1.09223,0.87644 1.828829,0.87644 0.745066,0 1.359148,-0.25817 1.841748,-0.77463 0.0085,-0.008 0.01686,-0.0124 0.02532,-0.0124 0.0085,0 0.01292,0.004 0.01292,0.0124 v 0.35553 c 0,0.6858 -0.139696,1.17251 -0.419095,1.46038 -0.2794,0.29633 -0.72417,0.44493 -1.333769,0.44493 -0.414866,0 -0.850731,-0.0553 -1.307931,-0.16536 -0.169333,-0.0423 -0.326322,-0.0127 -0.470255,0.0889 -0.143933,0.1016 -0.215491,0.23736 -0.215491,0.40669 v 0.25373 c 0,0.21167 0.06762,0.40221 0.203089,0.57155 0.135466,0.16933 0.304779,0.27102 0.507979,0.30489 0.406399,0.0677 0.863493,0.10128 1.371492,0.10128 1.193799,0 2.10405,-0.29617 2.730583,-0.88883 0.634999,-0.59267 0.952397,-1.46046 0.952397,-2.60346 v -5.30872 c 0,-0.19473 -0.07207,-0.36405 -0.216008,-0.50798 -0.143933,-0.14393 -0.313246,-0.21601 -0.507979,-0.21601 h -0.469739 c -0.2032,0 -0.376965,0.0721 -0.520898,0.21601 -0.143934,0.13547 -0.219944,0.30478 -0.22841,0.50798 v 0.1018 c 0,0.008 -0.0045,0.0124 -0.01292,0.0124 l -0.02532,-0.0253 c -0.533399,-0.62653 -1.172646,-0.93948 -1.917712,-0.93948 z m -71.285055,0.12661 c -0.177799,0 -0.317496,0.0721 -0.419096,0.21601 -0.101599,0.14393 -0.118376,0.29647 -0.05064,0.45734 l 2.146122,5.8291 c 0.0085,0.0339 0.01292,0.0679 0.01292,0.1018 0,0.0339 -0.0045,0.0679 -0.01292,0.1018 l -0.850594,2.03192 c -0.06773,0.16087 -0.05541,0.30895 0.03772,0.44442 0.09313,0.14393 0.228893,0.216 0.406693,0.216 h 0.698149 c 0.211666,0 0.40666,-0.0637 0.58446,-0.19068 0.1778,-0.11853 0.304655,-0.27946 0.380855,-0.48266 l 2.997233,-8.0517 c 0.05927,-0.16087 0.03804,-0.31341 -0.06356,-0.45734 -0.101599,-0.14393 -0.236843,-0.21601 -0.406176,-0.21601 h -0.698666 c -0.220133,0 -0.419063,0.0637 -0.596862,0.19069 -0.169334,0.127 -0.279413,0.29238 -0.330213,0.49557 l -1.155485,3.96204 c 0,0.008 -0.0045,0.0129 -0.01292,0.0129 -0.0085,0 -0.0124,-0.004 -0.0124,-0.0129 l -0.965316,-3.94963 c -0.0508,-0.2032 -0.160879,-0.36806 -0.330212,-0.49506 -0.169334,-0.13547 -0.35594,-0.20361 -0.559139,-0.20361 z m 37.719145,0 c -0.194733,0 -0.364046,0.0721 -0.507979,0.21601 -0.143933,0.14393 -0.216008,0.31325 -0.216008,0.50798 v 5.15627 c 0,0.19474 0.07207,0.36405 0.216008,0.50798 0.143933,0.14394 0.313246,0.21601 0.507979,0.21601 h 0.711068 c 0.194733,0 0.364046,-0.0721 0.507979,-0.21601 0.143933,-0.14393 0.216008,-0.31324 0.216008,-0.50798 v -5.15627 c 0,-0.19473 -0.07207,-0.36405 -0.216008,-0.50798 -0.143933,-0.14393 -0.313246,-0.21601 -0.507979,-0.21601 z m 20.193083,0 c -0.194733,0 -0.364046,0.0721 -0.50798,0.21601 -0.143933,0.14393 -0.216007,0.31325 -0.216007,0.50798 v 5.15627 c 0,0.19474 0.07207,0.36405 0.216007,0.50798 0.143934,0.14394 0.313247,0.21601 0.50798,0.21601 h 0.711067 c 0.194734,0 0.364047,-0.0721 0.50798,-0.21601 0.143933,-0.14393 0.216007,-0.31324 0.216007,-0.50798 v -5.15627 c 0,-0.19473 -0.07207,-0.36405 -0.216007,-0.50798 -0.143933,-0.14393 -0.313246,-0.21601 -0.50798,-0.21601 z m -62.014303,1.25781 c 0.711199,0 1.083895,0.43586 1.117761,1.30793 0,0.0762 -0.038,0.1142 -0.114205,0.1142 h -2.146639 c -0.05927,0 -0.08888,-0.0341 -0.08888,-0.1018 0.0508,-0.4826 0.17372,-0.82123 0.368453,-1.01596 0.194733,-0.2032 0.482514,-0.30437 0.863513,-0.30437 z m 13.703556,0.0506 c 0.423333,0 0.736278,0.15647 0.939478,0.46974 0.211666,0.31326 0.31781,0.8212 0.31781,1.52394 0,0.70273 -0.106144,1.21067 -0.31781,1.52393 -0.2032,0.31327 -0.516145,0.47026 -0.939478,0.47026 -0.423332,0 -0.741246,-0.15699 -0.952913,-0.47026 -0.2032,-0.31326 -0.304374,-0.8212 -0.304374,-1.52393 0,-0.70274 0.101174,-1.21068 0.304374,-1.52394 0.211667,-0.31327 0.529581,-0.46974 0.952913,-0.46974 z m -21.234362,0.0889 c 0.846665,0 1.26969,0.6348 1.26969,1.9048 0,0.64346 -0.114015,1.12178 -0.342615,1.43505 -0.2286,0.31327 -0.537609,0.47026 -0.927075,0.47026 -0.338667,0 -0.635352,-0.11454 -0.889352,-0.34314 -0.253999,-0.2286 -0.380855,-0.48676 -0.380855,-0.77463 v -1.57458 c 0,-0.28786 0.126856,-0.54654 0.380855,-0.77514 0.254,-0.2286 0.550685,-0.34262 0.889352,-0.34262 z m 36.474259,0 c 0.338666,0 0.634835,0.11402 0.888835,0.34262 0.253999,0.2286 0.381372,0.48728 0.381372,0.77514 v 1.57458 c 0,0.28787 -0.127373,0.54603 -0.381372,0.77463 -0.254,0.2286 -0.550169,0.34314 -0.888835,0.34314 -0.389466,0 -0.698475,-0.15699 -0.927075,-0.47026 -0.2286,-0.31327 -0.343132,-0.79159 -0.343132,-1.43505 0,-1.27 0.423541,-1.9048 1.270207,-1.9048 z m 19.583301,0 c 0.846666,0 1.270207,0.6348 1.270207,1.9048 0,0.635 -0.114532,1.11332 -0.343132,1.43505 -0.2286,0.31327 -0.537609,0.47026 -0.927075,0.47026 -0.3302,0 -0.626368,-0.11454 -0.888835,-0.34314 -0.253999,-0.23706 -0.381372,-0.49523 -0.381372,-0.77463 v -1.57458 c 0,-0.2794 0.127373,-0.53362 0.381372,-0.76222 0.262467,-0.23707 0.558635,-0.35554 0.888835,-0.35554 z m 7.861536,0 c 0.846665,0 1.269689,0.6348 1.269689,1.9048 0,0.635 -0.114014,1.11332 -0.342614,1.43505 -0.2286,0.31327 -0.537609,0.47026 -0.927075,0.47026 -0.3302,0 -0.626885,-0.11454 -0.889352,-0.34314 -0.254,-0.23706 -0.380855,-0.49523 -0.380855,-0.77463 v -1.57458 c 0,-0.2794 0.126855,-0.53362 0.380855,-0.76222 0.262467,-0.23707 0.559152,-0.35554 0.889352,-0.35554 z m 19.672184,0 c 0.330199,0 0.613527,0.11847 0.850594,0.35554 0.237066,0.2286 0.35605,0.51244 0.35605,0.85111 v 1.23145 c 0,0.29633 -0.118984,0.55895 -0.35605,0.78755 -0.237067,0.22013 -0.520395,0.33021 -0.850594,0.33021 -0.372533,0 -0.668702,-0.14809 -0.888835,-0.44442 -0.211666,-0.29633 -0.31781,-0.7411 -0.31781,-1.33377 0,-1.18533 0.402312,-1.77767 1.206645,-1.77767 z"
						/>
						<path
							d="m 54.738584,125.97284 q -0.27849,-0.0881 -0.423029,-0.34699 -0.140707,-0.27097 -0.05259,-0.54946 0.08812,-0.27849 0.359096,-0.4192 0.270974,-0.14071 0.549464,-0.0526 l 0.484332,0.15325 q 0.09687,0.0307 0.131348,-0.0783 l 0.475092,-1.50143 q 0.08812,-0.27849 0.359096,-0.4192 0.270974,-0.1407 0.549465,-0.0526 l 0.581197,0.1839 q 0.278491,0.0881 0.419198,0.3591 0.140707,0.27097 0.05259,0.54947 l -0.475092,1.50142 q -0.03448,0.10898 0.07449,0.14346 l 1.186612,0.37547 q 0.278491,0.0881 0.40709,0.35527 0.140707,0.27097 0.05259,0.54946 -0.08812,0.27849 -0.359096,0.4192 -0.255035,0.13243 -0.533525,0.0443 L 57.3903,126.81189 q -0.108974,-0.0345 -0.143457,0.0745 l -0.655166,2.07051 q -0.241377,0.76283 -0.17332,1.01081 0.08017,0.25182 0.564498,0.40507 0.254274,0.0805 0.407236,0.10222 0.277876,0.048 0.433909,0.27051 0.156033,0.22254 0.07557,0.47681 l -0.03065,0.0969 q -0.09578,0.30271 -0.362314,0.47146 -0.266528,0.16876 -0.58073,0.1093 -0.390682,-0.0703 -0.887121,-0.22743 -1.235045,-0.3908 -1.578844,-1.07237 -0.327859,-0.68985 0.105088,-2.05809 l 0.720299,-2.27636 q 0.03448,-0.10897 -0.06238,-0.13962 z"
							id="path5154"
							fill="#981d28"
							fill-opacity="1"
							stroke="#fffbeb"
							stroke-width="0.264583"
							stroke-dasharray="none"
							stroke-opacity="1"
							paint-order="stroke"
						/>
					</g>
				</g>
			</svg>
		</Link>
	);
}

interface IconProps {
	size?: 'sm';
}

export default Icon;
