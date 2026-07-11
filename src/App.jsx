import { useState, useEffect, useMemo, useRef, createElement as h } from 'react';
import { applyDemoData } from './demoData.js';

/* ─── Hook PWA Install ─────────────────────────────────────────────────────── */
function usePWAInstall() {
  const [installable, setInstallable] = useState(false);
  const [installed, setInstalled]     = useState(false);
  const deferredPrompt                = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setInstallable(true);
    };
    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setInstalled(true);
      setInstallable(false);
      deferredPrompt.current = null;
    });

    // Already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    const { outcome } = await deferredPrompt.current.userChoice;
    if (outcome === 'accepted') {
      setInstallable(false);
      deferredPrompt.current = null;
    }
  };

  return { installable, installed, promptInstall };
}

const printReport = (e) => {
  let parent = e.currentTarget.parentElement;
  let printArea = null;
  while (parent && parent !== document.body) {
    printArea = parent.querySelector('.print-area');
    if (printArea) break;
    parent = parent.parentElement;
  }
  if (!printArea) {
    printArea = document.querySelector('.print-area');
  }
  if (!printArea) return;
  const clone = printArea.cloneNode(true);
  clone.id = 'print-clone';
  document.body.appendChild(clone);
  window.print();
  setTimeout(() => {
    clone.remove();
  }, 1000);
};

/* ════════════════════════════════════════════
   DIRECTION ARTISTIQUE — éditorial noir & crème
   accent vert ponctuel. Pas d'icônes, peu de bordures.
════════════════════════════════════════════ */
const T={
  /* fonds */
  cream:'#EFE9DD',     /* fond principal */
  cream2:'#E7E0D1',    /* surface légèrement enfoncée */
  cream3:'#DED5C2',    /* hover / lignes paires */
  paper:'#F5F1E8',     /* surface claire (champs) */
  ink:'#15130E',       /* encre quasi noire */
  ink2:'#3A352B',      /* texte secondaire */
  ink3:'#6E6757',      /* tertiaire / labels */
  ink4:'#9B9379',      /* discret / placeholder */
  /* filets */
  line:'#15130E',      /* filet fort (noir) */
  hair:'#C9C0AB',      /* filet fin */
  hair2:'#D8D0BD',
  /* vert (accent ponctuel) */
  green:'#1F6B3F',
  greenH:'#185533',
  greenL:'#E2E8DA',
  greenInk:'#14502E',
  /* sémantiques sobres, dérivés de l'encre */
  red:'#9A3324',redL:'#EADBCF',
  amber:'#8A6A1E',amberL:'#E8E0CB',
};

const S={
  /* champ "souligné" plutôt qu'encadré */
  field:{background:'transparent',border:'none',borderBottom:`1px solid ${T.hair}`,
    borderRadius:0,padding:'8px 0',color:T.ink,fontSize:15,width:'100%',height:38,
    transition:'border-color .15s',fontFamily:'inherit'},
  select:{background:'transparent',border:'none',borderBottom:`1px solid ${T.hair}`,
    borderRadius:0,padding:'8px 22px 8px 0',color:T.ink,fontSize:15,width:'100%',height:38,
    cursor:'pointer',appearance:'none',fontFamily:'inherit',
    backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2315130E' stroke-width='1.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat:'no-repeat',backgroundPosition:'right 2px center'},
  textarea:{background:'transparent',border:`1px solid ${T.hair}`,borderRadius:0,
    padding:'10px 12px',color:T.ink,fontSize:15,width:'100%',resize:'vertical',
    minHeight:80,lineHeight:1.55,fontFamily:'inherit'},
  label:{fontSize:11,fontWeight:600,color:T.ink3,marginBottom:4,display:'block',
    textTransform:'uppercase',letterSpacing:'0.12em',fontFamily:"'Archivo Narrow',sans-serif"},
  th:{padding:'10px 18px 10px 0',textAlign:'left',fontWeight:600,fontSize:10.5,color:T.ink3,
    whiteSpace:'nowrap',letterSpacing:'0.14em',textTransform:'uppercase',
    borderBottom:`1px solid ${T.line}`,fontFamily:"'Archivo Narrow',sans-serif"},
  td:{padding:'14px 18px 14px 0',borderBottom:`1px solid ${T.hair}`,color:T.ink2,
    fontSize:14.5,verticalAlign:'middle'},
  table:{width:'100%',borderCollapse:'collapse'},
  empty:{padding:'40px 0',textAlign:'left',color:T.ink4,fontSize:15,fontStyle:'italic',fontFamily:"'Oswald',sans-serif"},
};

/* Focus vert sur les champs */
const focusable=el=>({
  onFocus:e=>{e.target.style.borderBottomColor=T.green;e.target.style.borderBottomWidth='1.5px';},
  onBlur:e=>{e.target.style.borderBottomColor=T.hair;e.target.style.borderBottomWidth='1px';}
});

/* ─── Bouton éditorial (texte souligné / bloc plein) ─── */
function Btn({children,onClick,variant='default',size='md',disabled,full,type}){
  const[hv,sHv]=useState(false);
  const Z={sm:{p:'7px 14px',fs:12},md:{p:'10px 20px',fs:13},lg:{p:'13px 26px',fs:14}}[size];
  /* styles par variante */
  const map={
    primary:{base:{background:T.green,color:T.cream,border:`1px solid ${T.green}`},
      hov:{background:T.greenH,border:`1px solid ${T.greenH}`}},
    success:{base:{background:T.green,color:T.cream,border:`1px solid ${T.green}`},
      hov:{background:T.greenH,border:`1px solid ${T.greenH}`}},
    solid:{base:{background:T.ink,color:T.cream,border:`1px solid ${T.ink}`},
      hov:{background:'#000',border:'1px solid #000'}},
    default:{base:{background:'transparent',color:T.ink,border:`1px solid ${T.ink}`},
      hov:{background:T.ink,color:T.cream}},
    ghost:{base:{background:'transparent',color:T.ink2,border:`1px solid transparent`,
      textDecoration:'underline',textUnderlineOffset:'3px',textDecorationColor:T.hair},
      hov:{color:T.ink,textDecorationColor:T.ink}},
    soft:{base:{background:T.cream2,color:T.ink,border:`1px solid ${T.hair}`},
      hov:{background:T.cream3,border:`1px solid ${T.ink3}`}},
    danger:{base:{background:'transparent',color:T.red,border:`1px solid ${T.red}`},
      hov:{background:T.red,color:T.cream}},
    dangerSolid:{base:{background:T.red,color:T.cream,border:`1px solid ${T.red}`},
      hov:{background:'#7d281c'}},
    warn:{base:{background:'transparent',color:T.amber,border:`1px solid ${T.amber}`},
      hov:{background:T.amber,color:T.cream}},
    amber:{base:{background:'transparent',color:T.amber,border:`1px solid ${T.amber}`},
      hov:{background:T.amber,color:T.cream}},
    violet:{base:{background:'transparent',color:T.ink,border:`1px solid ${T.ink3}`},
      hov:{background:T.ink2,color:T.cream}},
  };
  const cfg=map[variant]||map.default;
  const st={...cfg.base,...(hv&&!disabled?cfg.hov:{})};
  return h('button',{type:type||'button',onClick:disabled?undefined:onClick,
    onMouseEnter:()=>sHv(true),onMouseLeave:()=>sHv(false),
    style:{...st,borderRadius:0,padding:Z.p,fontSize:Z.fs,fontWeight:600,
      letterSpacing:'0.08em',textTransform:'uppercase',
      fontFamily:"'Archivo',sans-serif",
      cursor:disabled?'not-allowed':'pointer',transition:'all .14s',
      opacity:disabled?.45:1,width:full?'100%':'auto',
      display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,whiteSpace:'nowrap'}},
    children);
}

/* ─── Badge texte (pas de pastille SaaS) ─── */
function Badge({children,tone='neutral'}){
  const M={
    neutral:T.ink3, green:T.greenInk, blue:T.ink2, amber:T.amber,
    red:T.red, violet:T.ink2,
  }[tone];
  const bg={
    neutral:'transparent', green:T.greenL, blue:'transparent', amber:T.amberL,
    red:T.redL, violet:'transparent',
  }[tone];
  return h('span',{style:{display:'inline-flex',alignItems:'center',gap:6,
    color:M,background:bg,padding:bg==='transparent'?'0':'2px 8px',
    fontSize:11,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',
    fontFamily:"'Archivo Narrow',sans-serif",whiteSpace:'nowrap',
    borderLeft:bg==='transparent'?`2px solid ${M}`:'none',
    paddingLeft:bg==='transparent'?8:8}},children);
}

/* ─── Notice (filet latéral, pas de carte) ─── */
function Notice({msg,tone,onClose}){
  if(!msg)return null;
  const c={ok:T.green,err:T.red,warn:T.amber,info:T.ink2}[tone||'info'];
  return h('div',{onClick:onClose,style:{borderLeft:`3px solid ${c}`,paddingLeft:16,
    padding:'10px 16px',marginBottom:20,display:'flex',justifyContent:'space-between',
    alignItems:'center',gap:12,color:T.ink,fontSize:14,background:T.paper}},
    h('span',null,msg),onClose&&h('span',{style:{cursor:'pointer',opacity:.5,fontWeight:600,fontSize:16}},'×'));
}

/* ─── Modale de confirmation ─── */
function ConfirmModal({show,title,message,confirmLabel,confirmVariant,onConfirm,onCancel}){
  if(!show)return null;
  return h('div',{onClick:onCancel,style:{position:'fixed',inset:0,background:'rgba(21,19,14,.55)',
    display:'flex',alignItems:'center',justifyContent:'center',zIndex:2000,padding:20}},
    h('div',{onClick:e=>e.stopPropagation(),style:{background:T.cream,width:480,maxWidth:'100%',
      border:`1px solid ${T.ink}`,padding:0}},
      h('div',{style:{padding:'30px 32px 22px'}},
        h('div',{className:'disp',style:{fontSize:26,fontWeight:500,color:T.ink,marginBottom:12,
          letterSpacing:'-0.01em',lineHeight:1.1}},title),
        h('div',{style:{fontSize:14.5,color:T.ink2,lineHeight:1.6}},message)),
      h('div',{style:{padding:'18px 32px',borderTop:`1px solid ${T.hair}`,
        display:'flex',gap:12,justifyContent:'flex-end'}},
        h(Btn,{variant:'ghost',onClick:onCancel},'Annuler'),
        h(Btn,{variant:confirmVariant||'dangerSolid',onClick:onConfirm},confirmLabel||'Confirmer'))));
}

/* ─── Portail de Connexion Unique ─── */
function LoginPortal({onSuccess,arbitres}){
  const[code,sC]=useState('');const[err,sE]=useState(false);
  const handleLogin=()=>{
    const trimmed=code.trim();if(!trimmed)return;
    if(trimmed==='4321'){
      onSuccess({role:'assign',label:'Assignation'});
    }else if(trimmed==='1234'){
      onSuccess({role:'compta',label:'Comptabilité'});
    }else{
      const arb=(arbitres||[]).find(x=>x.licence&&x.licence.toLowerCase()===trimmed.toLowerCase());
      if(arb){
        onSuccess({role:'ref',label:'Arbitre',refId:arb.id});
      }else{
        sE(true);sC('');setTimeout(()=>sE(false),2200);
      }
    }
  };
  return h('div',{style:{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:T.cream,padding:20}},
    h('div',{style:{background:T.paper,border:`2px solid ${T.line}`,padding:'48px 40px',width:440,maxWidth:'100%',boxShadow:'0 10px 30px rgba(21,19,14,0.08)'}},
      h('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:32}},
        h('img',{src:LOGO_SRC,alt:'FDF',style:{width:72,height:'auto',marginBottom:16}}),
        h('h1',{className:'disp',style:{fontSize:32,fontWeight:700,color:T.ink,lineHeight:1,textAlign:'center'}},'PGI.FDF'),
        h('p',{className:'narrow',style:{fontSize:11,color:T.green,letterSpacing:'0.18em',marginTop:6,fontWeight:700,textTransform:'uppercase'}},'Portail Fédéral de Connexion')
      ),
      h('div',{style:{marginBottom:24}},
        h(Field,{label:"Code d'accès ou N° de Licence"},
          h('input',{value:code,type:'password',placeholder:'Entrez votre code ou licence',
            onChange:e=>{sC(e.target.value);sE(false);},onKeyDown:e=>{if(e.key==='Enter')handleLogin();},
            ...focusable(),
            style:{...S.field,fontSize:16,textAlign:'center',height:44,borderBottomColor:err?T.red:T.hair}}))
      ),
      err&&h('p',{style:{color:T.red,fontSize:13,textAlign:'center',marginBottom:18,fontWeight:500}},"Code d'accès ou N° de licence invalide."),
      h(Btn,{variant:'primary',size:'lg',onClick:handleLogin,style:{width:'100%',display:'block'}},'Se connecter')
    )
  );
}

/* ─── Utilitaires ─── */
function useLS(key,init){
  const [v, sV] = useState(init);

  const apiPath = useMemo(() => {
    if (key === 'pgi3:clubs') return '/api/clubs';
    if (key === 'pgi3:arbitres') return '/api/arbitres';
    if (key === 'pgi3:saisons') return '/api/saisons';
    if (key === 'pgi3:divisions') return '/api/divisions';
    if (key === 'pgi3:competitions') return '/api/competitions';
    if (key === 'pgi3:taux') return '/api/taux';
    if (key === 'pgi3:sanctions') return '/api/sanctions';
    if (key === 'pgi3:matchs') return '/api/matchs';
    if (key === 'pgi3:feuilles') return '/api/feuilles';
    if (key === 'pgi3:presences') return '/api/presences';
    if (key === 'pgi3:sancapp') return '/api/sancapp';
    if (key === 'pgi3:refConfirm') return '/api/refconfirmations';
    if (key === 'pgi3:rapports') return '/api/rapports';
    return null;
  }, [key]);

  useEffect(() => {
    if (!apiPath) {
      try {
        const s = localStorage.getItem(key);
        if (s) sV(JSON.parse(s));
      } catch {}
      return;
    }

    fetch(apiPath)
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          sV(data);
        }
      })
      .catch(err => console.error("Error loading " + key, err));
  }, [apiPath, key]);

  const setVal = (newValOrFunc) => {
    sV(prev => {
      const nextVal = typeof newValOrFunc === 'function' ? newValOrFunc(prev) : newValOrFunc;
      if (!apiPath) {
        try {
          localStorage.setItem(key, JSON.stringify(nextVal));
        } catch {}
      } else {
        fetch(apiPath, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nextVal)
        }).catch(err => console.error("Error syncing " + key, err));
      }
      return nextVal;
    });
  };

  return [v, setVal];
}
const nid=arr=>arr.length?Math.max(...arr.map(x=>x.id))+1:1;
const uid=()=>Date.now()+Math.floor(Math.random()*100000);
const fdj=n=>(n||0).toLocaleString('fr-FR')+' FDJ';

/* Champs de formulaire */
function Field({label,hint,children,span}){
  return h('div',{style:span?{gridColumn:`span ${span}`}:{}},
    label&&h('label',{style:S.label},label),children,
    hint&&h('div',{style:{fontSize:11.5,color:T.ink4,marginTop:5,lineHeight:1.4}},hint));
}
function Inp(p){const{style,...rest}=p;return h('input',{...rest,...focusable(),style:{...S.field,...(style||{})}});}
function Sel({value,onChange,children,style}){return h('select',{value,onChange,...focusable(),style:{...S.select,...(style||{})}},children);}

/* En-tête de section éditorial (numéro + titre serif + filet) */
function SectionHead({num,title,sub,right}){
  return h('div',{style:{marginBottom:24}},
    h('div',{style:{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:20,
      borderBottom:`1px solid ${T.line}`,paddingBottom:14}},
      h('div',{style:{display:'flex',alignItems:'flex-end',gap:18}},
        num&&h('span',{className:'narrow',style:{fontSize:13,color:T.green,fontWeight:600,
          letterSpacing:'0.2em',paddingBottom:6}},num),
        h('div',null,
          h('h2',{className:'disp',style:{fontSize:'clamp(26px,3.4vw,38px)',fontWeight:500,
            color:T.ink,lineHeight:1,letterSpacing:'-0.015em'}},title),
          sub&&h('p',{style:{fontSize:13.5,color:T.ink3,marginTop:8,maxWidth:560,lineHeight:1.5}},sub))),
      right&&h('div',{style:{paddingBottom:4,flexShrink:0}},right)));
}

/* Bloc de contenu (zone aérée, pas de carte encadrée) */
function Block({children,style}){return h('div',{style:{marginBottom:48,...(style||{})}},children);}
function Stack({children,gap}){return h('div',{style:{display:'flex',flexDirection:'column',gap:gap||16}},children);}

/* ════════════════════════════════════════════
   SHIM — mappe l'ancien design system vers la
   direction éditoriale noir & crème.
   "Card" devient un bloc ouvert (pas de boîte SaaS).
════════════════════════════════════════════ */
const C={
  page:T.cream, surface:T.cream, surface2:T.cream2, surface3:T.cream3,
  ink:T.ink, ink2:T.ink2, ink3:T.ink3, ink4:T.ink4,
  line:T.hair, line2:T.hair,
  blue:T.ink2, blueD:T.ink2, blueL:'transparent',
  green:T.green, greenD:T.greenInk, greenL:T.greenL,
  amber:T.amber, amberD:T.amber, amberL:T.amberL,
  red:T.red, redD:T.red, redL:T.redL,
  violet:T.ink2, violetD:T.ink2, violetL:'transparent',
  sh:'none', sh2:'none', shLg:'none',
};
const ST={
  body:{padding:'4px 0 0'},
  card:{},
  cardHead:()=>({}),
  cardTitle:{fontSize:18,fontWeight:600,color:T.ink},
  cardSub:{fontSize:13,color:T.ink3,marginTop:4},
  input:S.field, select:S.select, textarea:S.textarea,
  th:S.th, td:S.td, table:S.table, empty:S.empty, label:S.label,
};
const rowBg=i=>'transparent';

/* Card → bloc éditorial ouvert (filet fin en haut, pas d'encadré) */
function Card({children,style}){
  return h('div',{style:{marginBottom:46,...(style||{})}},children);
}
/* CardHead → en-tête éditorial avec filet noir */
let __cardNum=0;
function CardHead({title,sub,right,accent}){
  return h('div',{style:{marginBottom:22}},
    h('div',{style:{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:20,
      borderBottom:`1px solid ${T.line}`,paddingBottom:13}},
      h('div',null,
        h('h3',{className:'disp',style:{fontSize:'clamp(22px,2.6vw,30px)',fontWeight:500,color:T.ink,
          lineHeight:1.05,letterSpacing:'-0.01em'}},title),
        sub&&h('p',{style:{fontSize:13,color:T.ink3,marginTop:7,maxWidth:580,lineHeight:1.5}},sub)),
      right&&h('div',{style:{flexShrink:0,paddingBottom:3}},right)));
}
function Section({children,gap}){return h('div',{style:{display:'flex',flexDirection:'column',gap:gap||16}},children);}

/* netFeuille — calcul inchangé */
function netFeuille(f,presences,sancApp,taux){
  const ps=presences.filter(p=>p.feuilleId===f.id&&p.present);
  return ps.reduce((acc,p)=>{
    const t=taux.find(t=>t.saisonId===f.saisonId&&t.division===f.divisionRetenue&&t.role===p.roleArbitre);
    const brut=t?t.montant:0;
    const ded=sancApp.filter(s=>s.presenceId===p.id).reduce((a,s)=>a+s.montantApplique,0);
    return acc+brut-ded;
  },0);
}
const eClub=()=>({id:0,nom:'',ville:'',stade:'',couleurs:'',coach:'',telephone:'',email:'',notes:''});
function ClubsTab({clubs,setClubs}){
  const[f,sF]=useState(eClub());const[n,sN]=useState(null);const[editId,sEdit]=useState(null);
  const ch=k=>e=>sF(p=>({...p,[k]:e.target.value}));
  const save=()=>{
    if(!f.nom.trim()){sN({msg:'Le nom du club est obligatoire.',tone:'err'});return;}
    if(!f.ville.trim()){sN({msg:'La ville est obligatoire.',tone:'err'});return;}
    if(editId){setClubs(p=>p.map(c=>c.id===editId?{...f,id:editId}:c));sN({msg:`Club « ${f.nom} » modifié.`,tone:'ok'});sEdit(null);}
    else{setClubs(p=>[...p,{...f,id:nid(p)}]);sN({msg:`Club « ${f.nom} » enregistré.`,tone:'ok'});}
    sF(eClub());
  };
  const edit=c=>{sF({...c});sEdit(c.id);sN(null);window.scrollTo({top:0,behavior:'smooth'});};
  const cancel=()=>{sF(eClub());sEdit(null);sN(null);};
  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(Card,null,
      h(CardHead,{title:editId?'Modifier le club':'Enregistrement d\u2019un club',sub:null}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}},
          h(Field,{label:'Nom du club *',span:2},h(Inp,{value:f.nom,onChange:ch('nom'),placeholder:'Ex : AS Djibouti'})),
          h(Field,{label:'Ville *'},h(Inp,{value:f.ville,onChange:ch('ville')})),
          h(Field,{label:'Stade / Terrain'},h(Inp,{value:f.stade,onChange:ch('stade')})),
          h(Field,{label:'Couleurs'},h(Inp,{value:f.couleurs,onChange:ch('couleurs'),placeholder:'Bleu et blanc'})),
          h(Field,{label:'Entra\u00eeneur'},h(Inp,{value:f.coach,onChange:ch('coach')})),
          h(Field,{label:'T\u00e9l\u00e9phone'},h(Inp,{value:f.telephone,onChange:ch('telephone'),placeholder:'+253 ...'})),
          h(Field,{label:'Email'},h(Inp,{value:f.email,onChange:ch('email'),type:'email'})),
          h(Field,{label:'Notes',span:2},h(Inp,{value:f.notes,onChange:ch('notes')})))),
      h('div',{style:{padding:'18px 0 0',display:'flex',gap:10}},
        h(Btn,{variant:'primary',onClick:save},editId?'Enregistrer les modifications':'Enregistrer le club'),
        h(Btn,{variant:'ghost',onClick:cancel},editId?'Annuler':'R\u00e9initialiser'))),
    h(Card,null,
      h(CardHead,{title:`Clubs enregistr\u00e9s`,sub:`${clubs.length} club(s) au total`}),
      clubs.length===0?h('div',{style:ST.empty},'Aucun club enregistr\u00e9 pour le moment.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Nom','Ville','Stade','Entra\u00eeneur','T\u00e9l\u00e9phone',''].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...clubs.map((c,i)=>h('tr',{key:c.id},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},c.nom),
          h('td',{style:ST.td},c.ville||'\u2014'),
          h('td',{style:ST.td},c.stade||'\u2014'),
          h('td',{style:ST.td},c.coach||'\u2014'),
          h('td',{style:ST.td},c.telephone||'\u2014'),
          h('td',{style:{...ST.td,textAlign:'right'}},h('div',{style:{display:'flex',gap:8,justifyContent:'flex-end'}},
            h(Btn,{variant:'soft',size:'sm',onClick:()=>edit(c)},'Modifier'),
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>setClubs(p=>p.filter(x=>x.id!==c.id))},'Supprimer')))))))))
  );
}

const eArb=()=>({id:0,nom:'',prenom:'',type:'',niveau:'',telephone:'',email:'',licence:'',statut:'',nbMatchs:0});
function ArbitresTab({arbitres,setArbitres}){
  const[f,sF]=useState(eArb());const[n,sN]=useState(null);const[editId,sEdit]=useState(null);
  const ch=k=>e=>sF(p=>({...p,[k]:e.target.value}));
  const save=()=>{
    if(!f.nom.trim()||!f.prenom.trim()){sN({msg:'Nom et pr\u00e9nom obligatoires.',tone:'err'});return;}
    if(!f.type){sN({msg:'Le type d\u2019arbitre est obligatoire.',tone:'err'});return;}
    if(!f.statut){sN({msg:'Le statut est obligatoire.',tone:'err'});return;}
    if(editId){setArbitres(p=>p.map(a=>a.id===editId?{...f,id:editId}:a));sN({msg:`Arbitre « ${f.nom} ${f.prenom} » modifié.`,tone:'ok'});sEdit(null);}
    else{setArbitres(p=>[...p,{...f,id:nid(p),nbMatchs:0}]);sN({msg:`Arbitre « ${f.nom} ${f.prenom} » enregistré.`,tone:'ok'});}
    sF(eArb());
  };
  const edit=a=>{sF({...a});sEdit(a.id);sN(null);window.scrollTo({top:0,behavior:'smooth'});};
  const cancel=()=>{sF(eArb());sEdit(null);sN(null);};
  const tType=t=>t==='Central'?'green':t==='Assistant'?'blue':'neutral';
  const tStat=s=>s==='Actif'?'green':s==='Suspendu'?'amber':s==='Inactif'?'neutral':'red';
  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(Card,null,
      h(CardHead,{title:editId?'Modifier l\u2019arbitre':'Enregistrement d\u2019un arbitre',sub:'Type et statut requis.'}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18}},
          h(Field,{label:'Pr\u00e9nom *'},h(Inp,{value:f.prenom,onChange:ch('prenom')})),
          h(Field,{label:'Nom *',span:2},h(Inp,{value:f.nom,onChange:ch('nom')})),
          h(Field,{label:'Type *'},h(Sel,{value:f.type,onChange:ch('type')},
            h('option',{value:''},'\u2014 S\u00e9lectionner \u2014'),h('option',{value:'Central'},'Central'),h('option',{value:'Assistant'},'Assistant'))),
          h(Field,{label:'Niveau'},h(Sel,{value:f.niveau,onChange:ch('niveau')},
            h('option',{value:''},'\u2014'),...['FIFA','CAF','National','R\u00e9gional'].map(x=>h('option',{key:x,value:x},x)))),
          h(Field,{label:'Statut *'},h(Sel,{value:f.statut,onChange:ch('statut')},
            h('option',{value:''},'\u2014 S\u00e9lectionner \u2014'),...['Actif','Suspendu','Inactif','Retrait\u00e9'].map(x=>h('option',{key:x,value:x},x)))),
          h(Field,{label:'T\u00e9l\u00e9phone'},h(Inp,{value:f.telephone,onChange:ch('telephone')})),
          h(Field,{label:'Email'},h(Inp,{value:f.email,onChange:ch('email'),type:'email'})),
          h(Field,{label:'N\u00b0 de licence'},h(Inp,{value:f.licence,onChange:ch('licence')})))),
      h('div',{style:{padding:'18px 0 0',display:'flex',gap:10}},
        h(Btn,{variant:'primary',onClick:save},editId?'Enregistrer les modifications':'Enregistrer l\u2019arbitre'),
        h(Btn,{variant:'ghost',onClick:cancel},editId?'Annuler':'R\u00e9initialiser'))),
    h(Card,null,
      h(CardHead,{title:'Arbitres enregistr\u00e9s',sub:`${arbitres.length} arbitre(s) au total`}),
      arbitres.length===0?h('div',{style:ST.empty},'Aucun arbitre enregistr\u00e9.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Nom','Pr\u00e9nom','Type','Niveau','Statut',''].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...arbitres.map((a,i)=>h('tr',{key:a.id},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},a.nom),
          h('td',{style:ST.td},a.prenom),
          h('td',{style:ST.td},a.type?h(Badge,{tone:tType(a.type)},a.type):'\u2014'),
          h('td',{style:ST.td},a.niveau||'\u2014'),
          h('td',{style:ST.td},a.statut?h(Badge,{tone:tStat(a.statut)},a.statut):'\u2014'),
          h('td',{style:{...ST.td,textAlign:'right'}},h('div',{style:{display:'flex',gap:8,justifyContent:'flex-end'}},
            h(Btn,{variant:'soft',size:'sm',onClick:()=>edit(a)},'Modifier'),
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>setArbitres(p=>p.filter(x=>x.id!==a.id))},'Supprimer')))))))))
  );
}


const eMatch=()=>({id:0,competition:'',dom:'',vis:'',date:'',heure:'',journee:'',stade:'',statut:'Programm\u00e9',notes:'',assigned:false,ac:'',a1:'',a2:'',a4:''});
function MatchsTab({matchs,setMatchs,clubs,competitions,divisions,actS}){
  const[f,sF]=useState(eMatch());const[n,sN]=useState(null);
  const ch=k=>e=>sF(p=>({...p,[k]:e.target.value}));
  // compétitions de la saison active
  const compsSaison=actS?competitions.filter(c=>c.saisonId===actS.id):[];
  // clubs contextualisés : selon la compétition choisie (ses divisions) sinon tous les clubs des divisions de la saison
  const clubIdsContext=(()=>{
    if(!actS)return null;
    const sel=compsSaison.find(c=>c.nom===f.competition);
    const ids=new Set();
    const divs=sel?divisions.filter(d=>d.saisonId===actS.id&&(sel.divisionIds||[]).includes(d.id))
                  :divisions.filter(d=>d.saisonId===actS.id);
    divs.forEach(d=>(d.clubIds||[]).forEach(id=>ids.add(id)));
    return ids;
  })();
  const clubsContext=clubIdsContext&&clubIdsContext.size>0?clubs.filter(c=>clubIdsContext.has(c.id)):clubs;
  const names=clubsContext.map(c=>c.nom);
  const save=()=>{
    if(!f.dom||!f.vis){sN({msg:'Les deux clubs sont obligatoires.',tone:'err'});return;}
    if(f.dom===f.vis){sN({msg:'Les clubs doivent \u00eatre diff\u00e9rents.',tone:'err'});return;}
    if(!f.date){sN({msg:'La date est obligatoire.',tone:'err'});return;}
    setMatchs(p=>[...p,{...f,id:nid(p),assigned:false,ac:'',a1:'',a2:'',a4:''}]);
    sN({msg:`Match « ${f.dom} \u2014 ${f.vis} » enregistr\u00e9.`,tone:'ok'});sF(eMatch());
  };
  const tStat=s=>s==='Termin\u00e9'?'green':s==='Annul\u00e9'?'red':s==='Report\u00e9'?'amber':'blue';
  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(Card,null,
      h(CardHead,{title:'Enregistrement d\u2019un match',sub:null}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}},
          h(Field,{label:'Comp\u00e9tition'},h(Sel,{value:f.competition,onChange:e=>{ch('competition')(e);sF(p=>({...p,dom:'',vis:''}));}},
            h('option',{value:''},(actS?compsSaison:competitions).length?'\u2014 S\u00e9lectionner \u2014':'Aucune comp\u00e9tition pour la saison active'),
            ...(actS?compsSaison:competitions).map(c=>h('option',{key:c.id,value:c.nom},c.nom)))),
          h(Field,{label:'Journ\u00e9e / Tour'},h(Inp,{value:f.journee,onChange:ch('journee'),placeholder:'J1, 8e de finale...'})),
          h(Field,{label:'Club domicile'},h(Sel,{value:f.dom,onChange:ch('dom')},
            h('option',{value:''},names.length?'\u2014 S\u00e9lectionner \u2014':'Aucun club rattach\u00e9'),...names.map(x=>h('option',{key:x,value:x},x)))),
          h(Field,{label:'Club visiteur'},h(Sel,{value:f.vis,onChange:ch('vis')},
            h('option',{value:''},names.length?'\u2014 S\u00e9lectionner \u2014':'Aucun club rattach\u00e9'),...names.filter(x=>x!==f.dom).map(x=>h('option',{key:x,value:x},x)))),
          h(Field,{label:'Date'},h(Inp,{value:f.date,onChange:ch('date'),type:'date'})),
          h(Field,{label:'Heure'},h(Inp,{value:f.heure,onChange:ch('heure'),type:'time'})),
          h(Field,{label:'Stade / Lieu'},h(Inp,{value:f.stade,onChange:ch('stade')})),
          h(Field,{label:'Statut'},h(Sel,{value:f.statut,onChange:ch('statut')},
            ...['Programm\u00e9','En cours','Termin\u00e9','Report\u00e9','Annul\u00e9'].map(x=>h('option',{key:x,value:x},x)))),
          h(Field,{label:'Notes',span:2},h(Inp,{value:f.notes,onChange:ch('notes')})))),
      h('div',{style:{padding:'16px 22px',background:C.surface2,borderTop:`1px solid ${C.line}`,display:'flex',gap:10}},
        h(Btn,{variant:'amber',onClick:save},'Enregistrer le match'),
        h(Btn,{variant:'ghost',onClick:()=>{sF(eMatch());sN(null);}},'R\u00e9initialiser'))),
    h(Card,null,
      h(CardHead,{title:'Matchs enregistr\u00e9s',sub:`${matchs.length} match(s) au total`}),
      matchs.length===0?h('div',{style:ST.empty},'Aucun match enregistr\u00e9.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Domicile','Visiteur','Date','Comp\u00e9tition','Statut','Arbitres',''].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...matchs.map((m,i)=>h('tr',{key:m.id,style:{background:rowBg(i)}},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},m.dom),
          h('td',{style:ST.td},m.vis),
          h('td',{style:ST.td},m.date),
          h('td',{style:ST.td},m.competition?h(Badge,{tone:'violet'},m.competition):'\u2014'),
          h('td',{style:ST.td},h(Badge,{tone:tStat(m.statut)},m.statut)),
          h('td',{style:ST.td},m.assigned?h(Badge,{tone:'green'},'Assign\u00e9'):h(Badge,{tone:'amber'},'En attente')),
          h('td',{style:{...ST.td,textAlign:'right'}},
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>setMatchs(p=>p.filter(x=>x.id!==m.id))},'Supprimer'))))))))
  );
}

/* ═══════════════════════════════════════════
   ASSIGNATION
═══════════════════════════════════════════ */
function AssignTab({matchs,setMatchs,arbitres,setArbitres,actS,competitions,divisions,clubs}){
  const[n,sN]=useState(null);
  const[fltArb,sFltArb]=useState('');
  const[confirm,sConfirm]=useState(null);

  // matchs de la saison active uniquement (par compétition rattachée à la saison)
  const compNomsSaison=useMemo(()=>{
    if(!actS)return new Set();
    return new Set(competitions.filter(c=>c.saisonId===actS.id).map(c=>c.nom));
  },[actS,competitions]);
  const matchsSaison=matchs.filter(m=>!m.competition||compNomsSaison.has(m.competition)||compNomsSaison.size===0);

  const un=matchsSaison.filter(m=>!m.assigned);
  const asNonSoumis=matchsSaison.filter(m=>m.assigned&&!m.submitted);
  const soumis=matchsSaison.filter(m=>m.submitted);

  const aC=arbitres.filter(a=>a.type==='Central'&&a.statut==='Actif');
  const aA=arbitres.filter(a=>a.type==='Assistant'&&a.statut==='Actif');

  // ─── Historique de rotation : basé sur les matchs SOUMIS de la saison, triés par date ───
  const histo=useMemo(()=>{
    const subs=[...soumis].sort((a,b)=>String(a.date||'').localeCompare(String(b.date||'')));
    // compteurs + dernier rôle par nom d'arbitre
    const stat={}; // nom -> {central, quatre, assist, total, lastRole, lastDate}
    const touch=(nom,role,date)=>{
      if(!nom)return;
      if(!stat[nom])stat[nom]={central:0,quatre:0,assist:0,total:0,lastRole:'',lastDate:''};
      const s=stat[nom];
      if(role==='Central')s.central++;else if(role==='4\u00e8me Arbitre')s.quatre++;else s.assist++;
      s.total++;
      if(String(date||'')>=String(s.lastDate||'')){s.lastDate=date||'';s.lastRole=role;}
    };
    subs.forEach(m=>{touch(m.ac,'Central',m.date);touch(m.a1,'Assistant',m.date);touch(m.a2,'Assistant',m.date);touch(m.a4,'4\u00e8me Arbitre',m.date);});
    return stat;
  },[soumis]);

  const fullName=a=>`${a.nom} ${a.prenom}`;
  const load=nom=>histo[nom]?histo[nom].total:0;
  const lastRole=nom=>histo[nom]?histo[nom].lastRole:'';

  // ─── Assignation automatique ───
  const auto=()=>{
    if(!actS){sN({msg:'Aucune saison active. Activez une saison dans le module Comptabilit\u00e9.',tone:'err'});return;}
    if(aC.length<2){sN({msg:`Il faut au moins 2 arbitres centraux actifs (actuellement ${aC.length}). V\u00e9rifiez le type et le statut des arbitres.`,tone:'err'});return;}
    if(aA.length<2){sN({msg:`Il faut au moins 2 arbitres assistants actifs (actuellement ${aA.length}). V\u00e9rifiez le type et le statut des arbitres.`,tone:'err'});return;}
    if(un.length===0){sN({msg:'Aucun match en attente d\u2019assignation pour cette saison.',tone:'info'});return;}

    // compteurs temporaires de charge (historique + lot courant)
    const tmpLoad={};arbitres.forEach(a=>{tmpLoad[fullName(a)]=load(fullName(a));});
    const tmpLastRole={};arbitres.forEach(a=>{tmpLastRole[fullName(a)]=lastRole(fullName(a));});

    // trier les matchs à assigner par date pour respecter la chronologie
    const ordered=[...un].sort((a,b)=>String(a.date||'').localeCompare(String(b.date||'')));
    const assignMap={};

    ordered.forEach(m=>{
      // arbitres éligibles = rattachés aux divisions de la compétition du match
      const comp=competitions.find(c=>c.saisonId===actS.id&&c.nom===m.competition);
      const divIds=comp?(comp.divisionIds||[]):[];
      const arbIdsRattaches=new Set();
      divIds.forEach(did=>{const dv=divisions.find(d=>d.id===did);(dv?.arbitreIds||[]).forEach(aid=>arbIdsRattaches.add(aid));});
      // pools filtrés ; repli sur tous les actifs si aucun rattachement
      let poolC=aC.filter(a=>arbIdsRattaches.has(a.id));if(poolC.length<2)poolC=aC;
      let poolA=aA.filter(a=>arbIdsRattaches.has(a.id));if(poolA.length<2)poolA=aA;
      // centraux éligibles : pas central au dernier match (sauf si effectif insuffisant)
      const centBase=[...poolC].sort((x,y)=>tmpLoad[fullName(x)]-tmpLoad[fullName(y)]);
      let eligC=centBase.filter(x=>tmpLastRole[fullName(x)]!=='Central');
      if(eligC.length<1)eligC=centBase; // repli
      const central=eligC[0];
      // 4ème arbitre : un autre central, le moins chargé, différent du central
      const c4Base=centBase.filter(x=>x.id!==central.id);
      const c4=(c4Base[0]||central);
      // assistants : 2 moins chargés
      const assBase=[...poolA].sort((x,y)=>tmpLoad[fullName(x)]-tmpLoad[fullName(y)]);
      const a1=assBase[0],a2=assBase[1]||assBase[0];

      assignMap[m.id]={ac:fullName(central),a1:fullName(a1),a2:fullName(a2),a4:fullName(c4)};
      // mise à jour des compteurs temporaires
      [[central,'Central'],[c4,'4\u00e8me Arbitre'],[a1,'Assistant'],[a2,'Assistant']].forEach(([ar,role])=>{
        tmpLoad[fullName(ar)]=(tmpLoad[fullName(ar)]||0)+1;tmpLastRole[fullName(ar)]=role;
      });
    });

    setMatchs(p=>p.map(m=>assignMap[m.id]?{...m,assigned:true,submitted:false,...assignMap[m.id]}:m));
    sN({msg:`${ordered.length} match(s) assign\u00e9(s). Ajustez si besoin, puis soumettez au comptable.`,tone:'ok'});
  };

  const resetAssign=()=>setMatchs(p=>p.map(m=>(m.assigned&&!m.submitted&&matchsSaison.find(x=>x.id===m.id))?{...m,assigned:false,ac:'',a1:'',a2:'',a4:''}:m));

  // ─── Ajustement manuel ───
  const updArb=(id,field,val)=>setMatchs(p=>p.map(m=>m.id===id?{...m,[field]:val}:m));
  const names=arbitres.filter(a=>a.statut==='Actif').map(fullName);
  const ArbSel=({m,field})=>h('select',{value:m[field]||'',onChange:e=>updArb(m.id,field,e.target.value),
    style:{border:'none',borderBottom:`1px solid ${T.hair}`,background:'transparent',borderRadius:0,
      padding:'5px 18px 5px 0',fontSize:13,color:T.ink,cursor:'pointer',fontFamily:'inherit',width:'100%',
      appearance:'none',backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2315130E' stroke-width='1.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
      backgroundRepeat:'no-repeat',backgroundPosition:'right 2px center'}},
    h('option',{value:''},'\u2014'),
    ...names.map(x=>h('option',{key:x,value:x},x)));

  // ─── Soumettre au comptable (irréversible) ───
  const askSubmit=()=>{
    const pretsCount=asNonSoumis.filter(m=>m.ac&&m.a1&&m.a2&&m.a4).length;
    if(pretsCount===0){sN({msg:'Aucun match assign\u00e9 complet \u00e0 soumettre.',tone:'warn'});return;}
    sConfirm({title:'Soumettre au comptable',
      message:`${pretsCount} match(s) seront soumis au comptable pour validation. Cette action est irr\u00e9versible : les arbitres de ces matchs ne pourront plus \u00eatre modifi\u00e9s ici.`,
      confirmLabel:'Soumettre',confirmVariant:'primary',
      onConfirm:()=>{
        const inc={};
        setMatchs(p=>p.map(m=>{
          if(m.assigned&&!m.submitted&&m.ac&&m.a1&&m.a2&&m.a4&&matchsSaison.find(x=>x.id===m.id)){
            [m.ac,m.a1,m.a2,m.a4].forEach(nm=>{inc[nm]=(inc[nm]||0)+1;});
            return{...m,submitted:true};
          }
          return m;
        }));
        setArbitres(p=>p.map(a=>{const nm=fullName(a);return inc[nm]?{...a,nbMatchs:(a.nbMatchs||0)+inc[nm]}:a;}));
        sConfirm(null);sN({msg:`${pretsCount} match(s) soumis au comptable.`,tone:'ok'});
      }});
  };

  // ─── Tableau de stats filtrable ───
  const statsRows=useMemo(()=>{
    return arbitres.map(a=>{
      const nm=fullName(a);const s=histo[nm]||{central:0,quatre:0,assist:0,total:0};
      return{nom:nm,type:a.type,total:s.total,central:s.central,quatre:s.quatre,assist:s.assist};
    }).filter(r=>!fltArb||r.nom.toLowerCase().includes(fltArb.toLowerCase()))
      .sort((a,b)=>b.total-a.total);
  },[arbitres,histo,fltArb]);

  const stats=[
    {l:'En attente',v:un.length},{l:'Assign\u00e9s (non soumis)',v:asNonSoumis.length},
    {l:'Soumis',v:soumis.length},{l:'Centraux actifs',v:aC.length},{l:'Assistants actifs',v:aA.length}];

  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(ConfirmModal,{show:!!confirm,...(confirm||{}),onCancel:()=>sConfirm(null)}),
    !actS&&h(Notice,{msg:'Aucune saison active. Activez une saison dans le module Comptabilit\u00e9 pour assigner.',tone:'warn'}),
    /* bandeau chiffres */
    h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:0,borderTop:`1px solid ${T.line}`,borderBottom:`1px solid ${T.line}`,marginBottom:32}},
      ...stats.map((s,i)=>h('div',{key:s.l,style:{padding:'18px 16px',borderRight:i<4?`1px solid ${T.hair}`:'none'}},
        h('div',{className:'disp',style:{fontSize:34,fontWeight:700,color:T.ink,lineHeight:1}},s.v),
        h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,marginTop:6,letterSpacing:'0.08em',textTransform:'uppercase'}},s.l)))),
    /* actions */
    h(Card,null,
      h(CardHead,{title:'Assignation automatique',sub:'Rotation \u00e9quilibr\u00e9e sur la saison \u2014 un central ne peut pas \u00eatre central deux matchs de suite (il passe 4\u00e8me).'}),
      h('div',{style:{padding:'18px 0 0',display:'flex',gap:10,flexWrap:'wrap'}},
        h(Btn,{variant:'primary',onClick:auto},'Assigner automatiquement'),
        asNonSoumis.length>0&&h(Btn,{variant:'soft',onClick:resetAssign},'R\u00e9initialiser les non soumis'))),
    /* matchs en attente */
    un.length>0&&h(Card,null,
      h(CardHead,{title:'Matchs en attente',sub:`${un.length} match(s)`}),
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Domicile','Visiteur','Date','Comp\u00e9tition'].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...un.map((m,i)=>h('tr',{key:m.id},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},m.dom),
          h('td',{style:ST.td},m.vis),h('td',{style:ST.td},m.date),
          h('td',{style:ST.td},m.competition?h(Badge,{tone:'violet'},m.competition):'\u2014'))))))),
    /* matchs assignés non soumis */
    asNonSoumis.length>0&&h(Card,null,
      h(CardHead,{title:'Matchs assign\u00e9s \u2014 \u00e0 soumettre',sub:`${asNonSoumis.length} match(s). Ajustez les arbitres puis soumettez au comptable.`,
        right:h('div',{style:{display:'flex',gap:10}},
          h(Btn,{variant:'primary',onClick:askSubmit},'Soumettre au comptable'))}),
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Match','Date','Central','Assistant 1','Assistant 2','4\u00e8me'].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...asNonSoumis.map((m,i)=>h('tr',{key:m.id},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink,minWidth:150}},`${m.dom} \u2014 ${m.vis}`),
          h('td',{style:ST.td},m.date),
          h('td',{style:{...ST.td,minWidth:140}},h(ArbSel,{m,field:'ac'})),
          h('td',{style:{...ST.td,minWidth:140}},h(ArbSel,{m,field:'a1'})),
          h('td',{style:{...ST.td,minWidth:140}},h(ArbSel,{m,field:'a2'})),
          h('td',{style:{...ST.td,minWidth:140}},h(ArbSel,{m,field:'a4'})))))))),
    /* matchs soumis (lecture seule) */
    soumis.length>0&&h(Card,null,
      h(CardHead,{title:'Matchs soumis au comptable',sub:`${soumis.length} match(s) \u2014 lecture seule`}),
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Match','Date','Central','Assistant 1','Assistant 2','4\u00e8me'].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...soumis.map((m,i)=>h('tr',{key:m.id},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},`${m.dom} \u2014 ${m.vis}`),
          h('td',{style:ST.td},m.date),
          h('td',{style:ST.td},m.ac),h('td',{style:ST.td},m.a1),
          h('td',{style:ST.td},m.a2),h('td',{style:ST.td},m.a4))))))),
    /* tableau descriptif filtrable */
    h(Card,null,
      h(CardHead,{title:'Charge des arbitres \u2014 saison',sub:'Calcul\u00e9 sur les matchs soumis.',
        right:h('div',{style:{width:220}},h(Inp,{value:fltArb,onChange:e=>sFltArb(e.target.value),placeholder:'Filtrer par nom...'}))}),
      statsRows.length===0?h('div',{style:ST.empty},'Aucun arbitre.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Arbitre','Type','Total matchs','Comme central','Comme 4\u00e8me','Comme assistant'].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...statsRows.map((r,i)=>h('tr',{key:r.nom},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},r.nom),
          h('td',{style:ST.td},r.type?h(Badge,{tone:r.type==='Central'?'green':'blue'},r.type):'\u2014'),
          h('td',{style:{...ST.td,textAlign:'center',fontWeight:700}},r.total),
          h('td',{style:{...ST.td,textAlign:'center'}},r.type==='Central'?r.central:'\u2014'),
          h('td',{style:{...ST.td,textAlign:'center'}},r.type==='Central'?r.quatre:'\u2014'),
          h('td',{style:{...ST.td,textAlign:'center'}},r.type==='Assistant'?r.assist:'\u2014')))))))
  );
}


/* ─── SAISONS ET TAUX ─── */
function CTaux({saisons,setSaisons,taux,setTaux}){
  const[sel,sSel]=useState(null);
  const[n,sN]=useState(null);
  const[confirm,sConfirm]=useState(null);
  const roles=['Central','Assistant','4\u00e8me Arbitre'];
  const tStat=s=>s==='Active'?'green':s==='Brouillon'?'amber':'neutral';

  const activer=s=>setSaisons(p=>p.map(x=>({...x,statut:x.id===s.id?'Active':(x.statut==='Active'?'Cl\u00f4tur\u00e9e':x.statut)})));
  const askCloturer=s=>sConfirm({
    title:'Cl\u00f4turer la saison',
    message:`La saison « ${s.libelle} » sera cl\u00f4tur\u00e9e. Les feuilles et paiements seront fig\u00e9s et la saison passera en lecture seule. Vous pourrez toujours consulter ses donn\u00e9es. Confirmez-vous la cl\u00f4ture ?`,
    confirmLabel:'Cl\u00f4turer la saison',confirmVariant:'amber',
    onConfirm:()=>{setSaisons(p=>p.map(x=>x.id===s.id?{...x,statut:'Cl\u00f4tur\u00e9e'}:x));sConfirm(null);sN({msg:`Saison « ${s.libelle} » cl\u00f4tur\u00e9e.`,tone:'ok'});}
  });
  const askSupprimer=s=>sConfirm({
    title:'Supprimer la saison',
    message:`Attention : la saison « ${s.libelle} » et l\u2019ensemble de sa grille de taux seront supprim\u00e9s d\u00e9finitivement. Cette action est irr\u00e9versible. Confirmez-vous la suppression ?`,
    confirmLabel:'Supprimer d\u00e9finitivement',confirmVariant:'danger',
    onConfirm:()=>{setSaisons(p=>p.filter(x=>x.id!==s.id));setTaux(p=>p.filter(t=>t.saisonId!==s.id));if(sel===s.id)sSel(null);sConfirm(null);sN({msg:'Saison supprim\u00e9e.',tone:'ok'});}
  });
  const updT=(id,v)=>setTaux(p=>p.map(t=>t.id===id?{...t,montant:parseFloat(v)||0}:t));

  // Divisions de la saison sélectionnée, triées par rang
  const selTaux=sel?taux.filter(t=>t.saisonId===sel):[];
  const divsSel=[...new Set(selTaux.map(t=>t.division))]
    .map(d=>({nom:d,rang:selTaux.find(t=>t.division===d)?.rang||99}))
    .sort((a,b)=>a.rang-b.rang);

  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(ConfirmModal,{show:!!confirm,...(confirm||{}),onCancel:()=>sConfirm(null)}),
    h(Card,null,
      h(CardHead,{title:'Saisons',sub:'Cycle de vie et taux.'}),
      saisons.length===0?h('div',{style:ST.empty},'Aucune saison cr\u00e9\u00e9e.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Saison','P\u00e9riode','Statut','Actions'].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...saisons.map((s,i)=>h('tr',{key:s.id,style:{background:rowBg(i)}},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},s.libelle),
          h('td',{style:ST.td},s.dateDebut&&s.dateFin?`${s.dateDebut} \u2192 ${s.dateFin}`:'\u2014'),
          h('td',{style:ST.td},h(Badge,{tone:tStat(s.statut)},s.statut)),
          h('td',{style:ST.td},h('div',{style:{display:'flex',gap:8,flexWrap:'wrap'}},
            s.statut==='Brouillon'&&h(Btn,{variant:'success',size:'sm',onClick:()=>activer(s)},'Activer'),
            s.statut==='Active'&&h(Btn,{variant:'amber',size:'sm',onClick:()=>askCloturer(s)},'Cl\u00f4turer'),
            h(Btn,{variant:'soft',size:'sm',onClick:()=>sSel(sel===s.id?null:s.id)},sel===s.id?'Masquer les taux':'Modifier les taux'),
            h(Btn,{variant:'danger',size:'sm',onClick:()=>askSupprimer(s)},'Supprimer'))))))))),
    sel&&h(Card,null,
      h(CardHead,{title:`Grille de taux \u2014 ${saisons.find(s=>s.id===sel)?.libelle}`,
        sub:'Montant FDJ par division et r\u00f4le.'}),
      divsSel.length===0?h('div',{style:ST.empty},'Aucune division pour cette saison.'):
      h('div',{style:{padding:22,overflowX:'auto'}},
        h('table',{style:ST.table},
          h('thead',null,h('tr',null,
            h('th',{style:{...ST.th,minWidth:80}},'Rang'),
            h('th',{style:{...ST.th,minWidth:140}},'Division'),
            ...roles.map(r=>h('th',{key:r,style:{...ST.th,minWidth:180}},r)))),
          h('tbody',null,...divsSel.map((d,i)=>h('tr',{key:d.nom,style:{background:rowBg(i)}},
            h('td',{style:{...ST.td,textAlign:'center',fontWeight:700,color:C.ink3}},d.rang),
            h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},d.nom),
            ...roles.map(role=>{
              const t=selTaux.find(t=>t.division===d.nom&&t.role===role);
              return h('td',{key:role,style:ST.td},
                h('div',{style:{display:'flex',alignItems:'center',gap:8}},
                  h('input',{value:t?t.montant:0,type:'number',min:'0',
                    onChange:e=>t&&updT(t.id,e.target.value),
                    style:{...ST.input,width:120,textAlign:'right',height:38}}),
                  h('span',{style:{fontSize:12,color:C.ink4,fontWeight:500}},'FDJ')));
            }))))))));
}

/* ─── SANCTIONS ─── */
function CSanctions({sanctions,setSanctions}){
  const[f,sF]=useState({libelle:'',modeCalcul:'Fixe',valeur:0});
  const[editId,sEdit]=useState(null);const[n,sN]=useState(null);
  const ch=k=>e=>sF(p=>({...p,[k]:e.target.value}));
  const save=()=>{
    if(!f.libelle.trim()){sN({msg:'Le libell\u00e9 est obligatoire.',tone:'err'});return;}
    if(editId){setSanctions(p=>p.map(s=>s.id===editId?{...s,...f,valeur:parseFloat(f.valeur)||0}:s));sEdit(null);sN({msg:'Sanction modifi\u00e9e.',tone:'ok'});}
    else{setSanctions(p=>[...p,{...f,id:nid(p),valeur:parseFloat(f.valeur)||0}]);sN({msg:'Sanction cr\u00e9\u00e9e.',tone:'ok'});}
    sF({libelle:'',modeCalcul:'Fixe',valeur:0});
  };
  const edit=s=>{sF({libelle:s.libelle,modeCalcul:s.modeCalcul,valeur:s.valeur});sEdit(s.id);};
  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(Card,null,
      h(CardHead,{title:editId?'Modifier la sanction':'Nouveau type de sanction',
        sub:null}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:18}},
          h(Field,{label:'Libell\u00e9'},h(Inp,{value:f.libelle,onChange:ch('libelle'),placeholder:'Ex : Absence non justifi\u00e9e'})),
          h(Field,{label:'Mode de calcul'},h(Sel,{value:f.modeCalcul,onChange:ch('modeCalcul')},
            h('option',{value:'Fixe'},'Montant fixe (FDJ)'),h('option',{value:'Pourcentage'},'Pourcentage (%)'))),
          h(Field,{label:f.modeCalcul==='Fixe'?'Montant (FDJ)':'Pourcentage (%)'},h(Inp,{value:f.valeur,onChange:ch('valeur'),type:'number',min:'0'})))),
      h('div',{style:{padding:'16px 22px',background:C.surface2,borderTop:`1px solid ${C.line}`,display:'flex',gap:10}},
        h(Btn,{variant:'primary',onClick:save},editId?'Enregistrer les modifications':'Cr\u00e9er la sanction'),
        editId&&h(Btn,{variant:'ghost',onClick:()=>{sEdit(null);sF({libelle:'',modeCalcul:'Fixe',valeur:0});}},'Annuler'))),
    h(Card,null,
      h(CardHead,{title:'Types de sanctions',sub:`${sanctions.length} type(s) d\u00e9fini(s)`}),
      sanctions.length===0?h('div',{style:ST.empty},'Aucune sanction d\u00e9finie.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Libell\u00e9','Mode','Retenue',''].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...sanctions.map((s,i)=>h('tr',{key:s.id,style:{background:rowBg(i)}},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},s.libelle),
          h('td',{style:ST.td},h(Badge,{tone:s.modeCalcul==='Fixe'?'blue':'violet'},s.modeCalcul)),
          h('td',{style:{...ST.td,fontWeight:700,color:C.redD}},s.modeCalcul==='Fixe'?`\u2212 ${fdj(s.valeur)}`:`\u2212 ${s.valeur} %`),
          h('td',{style:{...ST.td,textAlign:'right'}},h('div',{style:{display:'flex',gap:8,justifyContent:'flex-end'}},
            h(Btn,{variant:'soft',size:'sm',onClick:()=>edit(s)},'Modifier'),
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>setSanctions(p=>p.filter(x=>x.id!==s.id))},'Supprimer')))))))))
  );
}

/* ─── FEUILLES DE MATCH ─── */
function CFeuilles({feuilles,setFeuilles,presences,setPresences,sancApp,setSancApp,saisons,taux,sanctions,actS,competitions,matchs,clubs,divisions,rapports}){
  const[n,sN]=useState(null);
  const[valId,sValId]=useState(null); // id du match en cours de validation
  const[viewReportId,sViewReportId]=useState(null);
  const[arbLines,sAL]=useState([]);
  const[sancL,sSL]=useState([[],[],[],[]]);
  const[scoreDom,sScoreDom]=useState('');const[scoreVis,sScoreVis]=useState('');const[incidents,sIncidents]=useState('');

  // matchs soumis de la saison active, non encore validés
  const compNomsSaison=useMemo(()=>{
    if(!actS)return new Set();
    return new Set(competitions.filter(c=>c.saisonId===actS.id).map(c=>c.nom));
  },[actS,competitions]);
  const valides=feuilles.filter(fe=>actS&&fe.saisonId===actS.id);
  const matchIdsValides=new Set(valides.map(fe=>fe.matchId));
  const aValider=(matchs||[]).filter(m=>m.submitted&&!matchIdsValides.has(m.id)&&
    (compNomsSaison.size===0||!m.competition||compNomsSaison.has(m.competition)));

  // division déduite d'un club
  const divisionDuClub=nomClub=>{
    if(!actS)return'';
    const cl=(clubs||[]).find(c=>c.nom===nomClub);
    if(!cl)return'';
    const dv=(divisions||[]).find(d=>d.saisonId===actS.id&&(d.clubIds||[]).includes(cl.id));
    return dv?dv.nom:'';
  };
  const divsActive=useMemo(()=>{
    if(!actS)return[];
    const m={};(taux.filter(t=>t.saisonId===actS.id)).forEach(t=>{m[t.division]=t.rang;});
    return Object.entries(m).map(([nom,rang])=>({nom,rang})).sort((a,b)=>a.rang-b.rang);
  },[actS,taux]);
  const rangOf=nom=>divsActive.find(d=>d.nom===nom)?.rang??999;

  const curMatch=aValider.find(m=>m.id===valId)||(matchs||[]).find(m=>m.id===valId);
  const rp=curMatch?(rapports||[]).find(r=>r.matchId===curMatch.id):null;
  const dDom=curMatch?divisionDuClub(curMatch.dom):'';
  const dVis=curMatch?divisionDuClub(curMatch.vis):'';
  const dRet=(dDom&&dVis)?(rangOf(dDom)<=rangOf(dVis)?dDom:dVis):(dDom||dVis||'');

  const brutOf=(role,div)=>{const t=taux.find(t=>t.saisonId===actS?.id&&t.division===div&&t.role===role);return t?t.montant:0;};
  const dedOf=(brut,sl)=>sl.reduce((a,s)=>{
    const ty=sanctions.find(x=>x.id===parseInt(s.typeId));if(!ty)return a;
    return a+(ty.modeCalcul==='Fixe'?(parseFloat(ty.valeur)||0):brut*(parseFloat(ty.valeur)||0)/100);
  },0);
  const prev=arbLines.map((a,i)=>{
    if(!a.present)return{brut:0,ded:0,net:0};
    const brut=brutOf(a.role,dRet);const ded=dedOf(brut,sancL[i]||[]);
    return{brut,ded,net:brut-ded};
  });
  const totB=prev.reduce((a,p)=>a+p.brut,0),totN=prev.reduce((a,p)=>a+p.net,0);

  const openValidation=m=>{
    const rp=(rapports||[]).find(r=>r.matchId===m.id);
    sValId(m.id);
    sAL(rp?.equipe?.length===4?rp.equipe.map(e=>({nom:e.nom,role:e.role,present:!!e.present})):[
      {nom:m.ac||'',role:'Central',present:true},
      {nom:m.a1||'',role:'Assistant',present:true},
      {nom:m.a2||'',role:'Assistant',present:true},
      {nom:m.a4||'',role:'4\u00e8me Arbitre',present:true}]);
    sSL([[],[],[],[]]);
    sScoreDom(rp?.scoreDom||'');
    sScoreVis(rp?.scoreVis||'');
    const incParts=[rp?.commentaires || rp?.incidents, rp?.discipline, rp?.observations].filter(Boolean);
    sIncidents(incParts.length?incParts.join('\n\n'):'');
    sN(rp?{msg:'Donn\u00e9es pr\u00e9-remplies depuis le rapport arbitre.',tone:'info'}:null);
    window.scrollTo({top:0,behavior:'smooth'});
  };
  const cancelVal=()=>{sValId(null);sAL([]);sSL([[],[],[],[]]);};
  const updAL=(i,k,v)=>sAL(p=>{const x=[...p];x[i]={...x[i],[k]:v};return x;});
  const addS=i=>sSL(p=>{const x=p.map(a=>[...a]);x[i].push({typeId:'',commentaire:''});return x;});
  const updS=(i,si,k,v)=>sSL(p=>{const x=p.map(a=>[...a]);x[i][si]={...x[i][si],[k]:v};return x;});
  const remS=(i,si)=>sSL(p=>{const x=p.map(a=>[...a]);x[i].splice(si,1);return x;});

  const valider=()=>{
    if(!rp){sN({msg:'Impossible de valider : le rapport de l\u2019arbitre n\u2019a pas encore \u00e9t\u00e9 re\u00e7u.',tone:'err'});return;}
    if(!dRet){sN({msg:'Division introuvable : les clubs ne sont pas rattach\u00e9s \u00e0 une division.',tone:'err'});return;}
    const fid=nid(feuilles);
    const nF={id:fid,matchId:curMatch.id,saisonId:actS.id,domicile:curMatch.dom,visiteur:curMatch.vis,
      competition:curMatch.competition||'',dateMatch:curMatch.date||'',scoreDom,scoreVis,incidents,
      divisionDom:dDom,divisionVis:dVis,divisionRetenue:dRet,statut:'Valid\u00e9e',
      dateValidation:new Date().toISOString().slice(0,10)};
    const nP=arbLines.map((a,i)=>({id:uid()+i,feuilleId:fid,nomArbitre:a.nom,roleArbitre:a.role,present:a.present}));
    const nSA=[];
    nP.forEach((p,i)=>{(sancL[i]||[]).forEach(s=>{
      if(!s.typeId)return;
      const brut=brutOf(p.roleArbitre,dRet);
      const ty=sanctions.find(x=>x.id===parseInt(s.typeId));
      const mt=ty?(ty.modeCalcul==='Fixe'?(parseFloat(ty.valeur)||0):brut*(parseFloat(ty.valeur)||0)/100):0;
      nSA.push({id:uid()+nSA.length+500,presenceId:p.id,typeSanctionId:parseInt(s.typeId),montantApplique:mt,commentaire:s.commentaire});
    });});
    setFeuilles(p=>[...p,nF]);setPresences(p=>[...p,...nP]);setSancApp(p=>[...p,...nSA]);
    sN({msg:'Feuille valid\u00e9e \u2014 calcul fig\u00e9.',tone:'ok'});cancelVal();
  };
  const tRole=r=>r==='Central'?'green':r==='Assistant'?'blue':'violet';

  // ─── Écran de validation d'un match ───
  if(valId&&curMatch)return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h('div',{style:{display:'flex',alignItems:'center',gap:14}},
      h(Btn,{variant:'ghost',onClick:cancelVal},'\u2190 Retour'),
      h('div',{className:'disp',style:{fontSize:24,fontWeight:600,color:C.ink}},`${curMatch.dom} \u2014 ${curMatch.vis}`)),
    h(Card,null,
      h(CardHead,{title:'Match',sub:'Division et taux d\u00e9duits automatiquement.'}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18}},
          h(Field,{label:'Date'},h('div',{style:{...S.field,display:'flex',alignItems:'center'}},curMatch.date||'\u2014')),
          h(Field,{label:'Comp\u00e9tition'},h('div',{style:{...S.field,display:'flex',alignItems:'center'}},curMatch.competition||'\u2014')),
          h(Field,{label:'Division retenue (RG01)'},
            h('div',{style:{...S.field,display:'flex',alignItems:'center',color:T.greenD,fontWeight:700,borderBottom:`1.5px solid ${T.green}`}},dRet||'Non d\u00e9duite'))),
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,marginTop:16}},
          h(Field,{label:`Score \u2014 ${curMatch.dom}`},h(Inp,{value:scoreDom,onChange:e=>sScoreDom(e.target.value),type:'number',placeholder:'0'})),
          h(Field,{label:`Score \u2014 ${curMatch.vis}`},h(Inp,{value:scoreVis,onChange:e=>sScoreVis(e.target.value),type:'number',placeholder:'0'}))),
        h('div',{style:{marginTop:16}},h(Field,{label:'Incidents / Observations'},
          h('textarea',{value:incidents,onChange:e=>sIncidents(e.target.value),placeholder:'Incidents \u00e9ventuels...',style:S.textarea}))))),
    rp && h(Card,null,
      h(CardHead,{title:'Rapport officiel de l\u2019arbitre central',sub:`Transmis par ${rp.redacteurNom} le ${rp.dateEnvoi||'\u2014'}`,right:h(Btn,{variant:'soft',size:'sm',onClick:printReport},'Imprimer')}),
      h('div',{style:ST.body},
        h('div',{className:'print-area',style:{
          border:`2px solid ${T.line}`,
          padding:'24px',
          background:T.paper,
          display:'flex',
          flexDirection:'column',
          gap:'20px',
          fontFamily:'inherit',
          fontSize:'13.5px'
        }},
          h('div', {style:{display:'flex',alignItems:'center',gap:'20px',borderBottom:`2px solid ${T.line}`,paddingBottom:'16px'}},
            h('img', {src:'/reflogo.avif', style:{
              width:'64px',
              height:'64px',
              objectFit:'contain',
              borderRadius:'8px',
              boxShadow:'0 4px 10px rgba(0,0,0,0.1)'
            }}),
            h('div', {style:{display:'flex',flexDirection:'column',gap:'4px'}},
              h('div', {style:{fontSize:'18px',fontWeight:800,color:C.ink,letterSpacing:'0.05em'}}, 'COMMISSION F\u00c9D\u00c9RALE DES ARBITRES'),
              h('div', {style:{fontSize:'12px',fontWeight:600,color:T.ink3,textTransform:'uppercase',letterSpacing:'0.1em'}}, 'Rapport Officiel d\'Arbitrage')
            )
          ),
          // DATE, DIVISION, N° MATCH
          h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'18px',borderBottom:`1px solid ${T.line}`,paddingBottom:'14px'}},
            h(Field,{label:'DATE :'},h('div',{style:S.field},curMatch.date||'\u2014')),
            h(Field,{label:'DIVISION :'},h('div',{style:S.field},curMatch.competition||'\u2014')),
            h(Field,{label:'N° DU MATCH :'},h('div',{style:S.field},rp.numMatch||rp.matchId||'\u2014'))
          ),
          // EQUIPE A, EQUIPE B
          h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'18px',borderBottom:`1px solid ${T.line}`,paddingBottom:'14px'}},
            h(Field,{label:'EQUIPE A :'},h('div',{style:{...S.field,fontWeight:700}},curMatch.dom||'\u2014')),
            h(Field,{label:'EQUIPE B :'},h('div',{style:{...S.field,fontWeight:700}},curMatch.vis||'\u2014'))
          ),
          // SCORE, EN FAVEUR DE
          h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'18px',borderBottom:`1px solid ${T.line}`,paddingBottom:'14px'}},
            h(Field,{label:`SCORE ${curMatch.dom}`},h('div',{style:S.field},rp.scoreDom)),
            h(Field,{label:`SCORE ${curMatch.vis}`},h('div',{style:S.field},rp.scoreVis)),
            h(Field,{label:'EN FAVEUR DE :'},h('div',{style:S.field},rp.enFaveurDe||(rp.scoreDom > rp.scoreVis ? curMatch.dom : rp.scoreVis > rp.scoreDom ? curMatch.vis : 'Nul')||'\u2014'))
          ),
          // ASSESSEUR
          h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'14px'}},
            h(Field,{label:'ASSESSEUR :'},h('div',{style:S.field},rp.assesseur||'\u2014'))
          ),
          // EQUIPE ARBITRALE
          h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'14px'}},
            h('div',{style:S.label,marginBottom:'10px'},'EQUIPE ARBITRALE'),
            h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'18px'}},
              (rp.equipe||[]).map((e,i)=>h('div',{key:i,style:{borderBottom:`1px solid ${T.hair}`,paddingBottom:'8px'}},
                h(Field,{label:`${e.role==='Central'?'ARBITRE 1 (CENTRAL)':e.role==='Assistant'&&i===1?'ARBITRE 2 (ASSISTANT 1)':e.role==='Assistant'&&i===2?'ARBITRE 3 (ASSISTANT 2)':'ARBITRE 4 (4ème)'} :`},
                  h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}},
                    h('span',{style:{fontWeight:600,fontSize:'13.5px',flex:1}},e.nom||'\u2014'),
                    h(Badge,{tone:e.present?'green':'red'},e.present?'Présent':'Absent'),
                    e.remarque&&h('span',{style:{fontSize:'12.5px',fontStyle:'italic',color:T.ink3,flex:1.5}},`Remarque: ${e.remarque}`)
                  )
                )
              ))
            )
          ),
          // COMMENTAIRES
          h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'14px'}},
            h(Field,{label:'COMMENTAIRES :'},h('div',{style:{...S.textarea,background:T.paper,padding:12,whiteSpace:'pre-wrap',minHeight:'auto'}},rp.commentaires||[rp.incidents,rp.discipline,rp.observations].filter(Boolean).join('\n\n')||'\u2014'))
          ),
          // QUESTIONS
          h('div', {style:{display:'flex',flexDirection:'column',gap:'10px'}},
            h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'8px'}},
              h('span',{style:{fontSize:'13px',fontWeight:500,color:T.ink2}},"Est-ce que les décisions de l'Arbitre ont impacté le match ?"),
              h('div',{style:{fontWeight:700}},rp.decisionsImpacte||'\u2014')
            ),
            h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'8px'}},
              h('span',{style:{fontSize:'13px',fontWeight:500,color:T.ink2}},"L'Arbitre est-il récommandé pour un autre match ?"),
              h('div',{style:{fontWeight:700}},rp.arbitreRecommande||'\u2014')
            ),
            h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'8px'}},
              h('span',{style:{fontSize:'13px',fontWeight:500,color:T.ink2}},"Faut-il mettre en place un suivi particulier ?"),
              h('div',{style:{fontWeight:700}},rp.suiviParticulier||'\u2014')
            )
          )
        )
      )
    ),
    h(Card,null,
      h(CardHead,{title:'Arbitres, pr\u00e9sences et sanctions'}),
      h('div',{style:ST.body},h(Section,{gap:14},
        ...arbLines.map((a,i)=>h('div',{key:i,style:{borderBottom:`1px solid ${T.hair}`,paddingBottom:16}},
          h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'2fr 1.2fr 1.2fr 1.4fr',gap:14,alignItems:'flex-end'}},
            h(Field,{label:`Arbitre ${i+1}`},h('div',{style:{...S.field,display:'flex',alignItems:'center',fontWeight:600}},a.nom||'\u2014')),
            h(Field,{label:'R\u00f4le'},h(Badge,{tone:tRole(a.role)},a.role)),
            h(Field,{label:'Pr\u00e9sence'},h(Sel,{value:a.present?'oui':'non',onChange:e=>updAL(i,'present',e.target.value==='oui')},
              h('option',{value:'oui'},'Pr\u00e9sent'),h('option',{value:'non'},'Absent'))),
            h(Field,{label:'Net pr\u00e9visionnel'},h('div',{style:{paddingTop:9,fontSize:15,fontWeight:700,color:a.present?C.greenD:C.ink4}},
              a.present?fdj(prev[i].net):'Absent'))),
          a.present&&sanctions.length>0&&h('div',{style:{marginTop:14}},
            h('div',{className:'narrow',style:{fontSize:11,fontWeight:600,color:C.ink3,marginBottom:10,letterSpacing:'0.1em',textTransform:'uppercase'}},'Sanctions'),
            h(Section,{gap:8},
              ...(sancL[i]||[]).map((s,si)=>h('div',{key:si,style:{display:'flex',gap:10,alignItems:'center'}},
                h('div',{style:{flex:'0 0 260px'}},h(Sel,{value:s.typeId,onChange:e=>updS(i,si,'typeId',e.target.value)},
                  h('option',{value:''},'\u2014 Choisir une sanction \u2014'),
                  ...sanctions.map(sx=>h('option',{key:sx.id,value:sx.id},`${sx.libelle} (${sx.modeCalcul==='Fixe'?fdj(sx.valeur):sx.valeur+' %'})`)))),
                h('div',{style:{flex:1}},h(Inp,{value:s.commentaire,onChange:e=>updS(i,si,'commentaire',e.target.value),placeholder:'Commentaire (optionnel)'})),
                h(Btn,{variant:'ghost',size:'sm',onClick:()=>remS(i,si)},'\u00d7'))),
              h('div',null,h(Btn,{variant:'soft',size:'sm',onClick:()=>addS(i)},'+ Ajouter une sanction')))))))))),
    h(Card,null,
      h(CardHead,{title:'R\u00e9capitulatif'}),
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Arbitre','R\u00f4le','Pr\u00e9sent','Brut','Net'].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...arbLines.map((a,i)=>h('tr',{key:i},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},a.nom||`Arbitre ${i+1}`),
          h('td',{style:ST.td},h(Badge,{tone:tRole(a.role)},a.role)),
          h('td',{style:{...ST.td,textAlign:'center'}},a.present?'Oui':'Non'),
          h('td',{style:{...ST.td,textAlign:'right'}},a.present?fdj(prev[i].brut):'\u2014'),
          h('td',{style:{...ST.td,textAlign:'right',fontWeight:700,color:C.greenD}},a.present?fdj(prev[i].net):'\u2014')))),
        h('tfoot',null,h('tr',null,
          h('td',{colSpan:3,style:{...ST.td,fontWeight:700,color:C.ink,borderTop:`2px solid ${T.line}`}},'TOTAL'),
          h('td',{style:{...ST.td,textAlign:'right',fontWeight:700,borderTop:`2px solid ${T.line}`}},fdj(totB)),
          h('td',{style:{...ST.td,textAlign:'right',fontWeight:800,color:C.greenD,fontSize:15,borderTop:`2px solid ${T.line}`}},fdj(totN)))))),
    h('div',{style:{display:'flex',gap:12}},
      h(Btn,{variant:'primary',onClick:valider},'Valider et figer le calcul'),
      h(Btn,{variant:'ghost',onClick:cancelVal},'Annuler')));

  // ─── Liste : matchs à valider + feuilles validées ───
  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    !actS&&h(Notice,{msg:'Aucune saison active. Activez une saison dans Saisons et taux.',tone:'warn'}),
    h(Card,null,
      h(CardHead,{title:'Matchs \u00e0 valider',sub:`${aValider.length} match(s) soumis par le service d\u2019assignation`}),
      aValider.length===0?h('div',{style:ST.empty},'Aucun match en attente de validation.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Match','Date','Arbitres','Division','Rapport',''].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...aValider.map((m,i)=>{
          const rp=(rapports||[]).find(r=>r.matchId===m.id);
          return h('tr',{key:m.id},
            h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},`${m.dom} \u2014 ${m.vis}`),
            h('td',{style:ST.td},m.date||'\u2014'),
            h('td',{style:{...ST.td,fontSize:12}},`${m.ac}, ${m.a1}, ${m.a2}, ${m.a4}`),
            h('td',{style:ST.td},(()=>{const d=divisionDuClub(m.dom),dv=divisionDuClub(m.vis);const dr=(d&&dv)?(rangOf(d)<=rangOf(dv)?d:dv):(d||dv);return dr?h(Badge,{tone:'blue'},dr):h(Badge,{tone:'amber'},'\u00e0 d\u00e9finir');})()),
            h('td',{style:ST.td},rp?h(Btn,{variant:'soft',size:'sm',onClick:()=>sViewReportId(rp.id)},'Re\u00e7u (voir)'):h(Badge,{tone:'amber'},'En attente')),
            h('td',{style:{...ST.td,textAlign:'right'}},h(Btn,{variant:rp?'primary':'ghost',size:'sm',disabled:!rp,onClick:()=>openValidation(m)},rp?'Valider':'En attente du rapport'))
          );
        }))
      ))
    ),
    h(Card,null,
      h(CardHead,{title:'Feuilles valid\u00e9es',sub:`${valides.length} feuille(s)`}),
      valides.length===0?h('div',{style:ST.empty},'Aucune feuille valid\u00e9e.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Match','Date','Division','Score','Net total','']  .map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...valides.map((fe,i)=>h('tr',{key:fe.id},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},`${fe.domicile} \u2014 ${fe.visiteur}`),
          h('td',{style:ST.td},fe.dateMatch||'\u2014'),
          h('td',{style:ST.td},fe.divisionRetenue?h(Badge,{tone:'blue'},fe.divisionRetenue):'\u2014'),
          h('td',{style:{...ST.td,textAlign:'center'}},fe.scoreDom!==''&&fe.scoreVis!==''?`${fe.scoreDom} \u2013 ${fe.scoreVis}`:'\u2014'),
          h('td',{style:{...ST.td,fontWeight:700,color:C.greenD}},fdj(netFeuille(fe,presences,sancApp,taux))),
          h('td',{style:{...ST.td,textAlign:'right'}},h(Btn,{variant:'ghost',size:'sm',onClick:()=>{setFeuilles(p=>p.filter(x=>x.id!==fe.id));setPresences(p=>p.filter(x=>x.feuilleId!==fe.id));}},'Supprimer')))))))),
    viewReportId && (() => {
      const report = (rapports || []).find(r => r.id === viewReportId);
      if (!report) return null;
      const m = (matchs || []).find(x => x.id === report.matchId);
      return h('div', {style:{
        position:'fixed',
        top:0,
        left:0,
        width:'100vw',
        height:'100vh',
        background:'rgba(0,0,0,0.5)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        zIndex:9999,
        padding:'20px'
      }, onClick:()=>sViewReportId(null)},
        h('div', {style:{
          background:T.paper,
          borderRadius:'8px',
          width:'100%',
          maxWidth:'800px',
          maxHeight:'90vh',
          overflowY:'auto',
          padding:'24px',
          boxShadow:'0 10px 25px rgba(0,0,0,0.2)'
        }, onClick:e=>e.stopPropagation()},
          h('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}},
            h('div',{style:{fontSize:'20px',fontWeight:700,color:C.ink}}, 'Rapport d\u2019arbitrage officiel'),
            h('div',{style:{display:'flex',gap:10}},
              h(Btn,{variant:'soft',size:'sm',onClick:printReport},'Imprimer'),
              h(Btn,{variant:'ghost',onClick:()=>sViewReportId(null)},'Fermer')
            )
          ),
          h('div',{className:'print-area',style:{
            border:`2px solid ${T.line}`,
            padding:'20px',
            background:T.paper,
            display:'flex',
            flexDirection:'column',
            gap:'18px',
            fontFamily:'inherit',
            fontSize:'13.5px'
          }},
            h('div', {style:{display:'flex',alignItems:'center',gap:'20px',borderBottom:`2px solid ${T.line}`,paddingBottom:'16px'}},
            h('img', {src:'/reflogo.avif', style:{
              width:'64px',
              height:'64px',
              objectFit:'contain',
              borderRadius:'8px',
              boxShadow:'0 4px 10px rgba(0,0,0,0.1)'
            }}),
            h('div', {style:{display:'flex',flexDirection:'column',gap:'4px'}},
              h('div', {style:{fontSize:'18px',fontWeight:800,color:C.ink,letterSpacing:'0.05em'}}, 'COMMISSION F\u00c9D\u00c9RALE DES ARBITRES'),
              h('div', {style:{fontSize:'12px',fontWeight:600,color:T.ink3,textTransform:'uppercase',letterSpacing:'0.1em'}}, 'Rapport Officiel d\'Arbitrage')
            )
          ),
            h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'15px',borderBottom:`1px solid ${T.line}`,paddingBottom:'12px'}},
              h(Field,{label:'DATE :'},h('div',{style:S.field},m?.date||'\u2014')),
              h(Field,{label:'DIVISION :'},h('div',{style:S.field},m?.competition||'\u2014')),
              h(Field,{label:'N° DU MATCH :'},h('div',{style:S.field},report.numMatch||report.matchId||'\u2014'))
            ),
            h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'15px',borderBottom:`1px solid ${T.line}`,paddingBottom:'12px'}},
              h(Field,{label:'EQUIPE A :'},h('div',{style:{...S.field,fontWeight:700}},m?.dom||'\u2014')),
              h(Field,{label:'EQUIPE B :'},h('div',{style:{...S.field,fontWeight:700}},m?.vis||'\u2014'))
            ),
            h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'15px',borderBottom:`1px solid ${T.line}`,paddingBottom:'12px'}},
              h(Field,{label:`SCORE ${m?.dom || 'DOMICILE'}`},h('div',{style:S.field},report.scoreDom)),
              h(Field,{label:`SCORE ${m?.vis || 'VISITEUR'}`},h('div',{style:S.field},report.scoreVis)),
              h(Field,{label:'EN FAVEUR DE :'},h('div',{style:S.field},report.enFaveurDe||(report.scoreDom > report.scoreVis ? m?.dom : report.scoreVis > report.scoreDom ? m?.vis : 'Nul')||'\u2014'))
            ),
            h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'12px'}},
              h(Field,{label:'ASSESSEUR :'},h('div',{style:S.field},report.assesseur||'\u2014'))
            ),
            h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'12px'}},
              h('div',{style:S.label,marginBottom:'8px'},'EQUIPE ARBITRALE'),
              h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'15px'}},
                (report.equipe||[]).map((e,i)=>h('div',{key:i,style:{borderBottom:`1px solid ${T.hair}`,paddingBottom:'6px'}},
                  h(Field,{label:`${e.role==='Central'?'ARBITRE 1 (CENTRAL)':e.role==='Assistant'&&i===1?'ARBITRE 2 (ASSISTANT 1)':e.role==='Assistant'&&i===2?'ARBITRE 3 (ASSISTANT 2)':'ARBITRE 4 (4ème)'} :`},
                    h('div',{style:{display:'flex',alignItems:'center',gap:'8px'}},
                      h('span',{style:{fontWeight:600,fontSize:'13px',flex:1}},e.nom||'\u2014'),
                      h(Badge,{tone:e.present?'green':'red'},e.present?'Présent':'Absent'),
                      e.remarque&&h('span',{style:{fontSize:'12px',fontStyle:'italic',color:T.ink3,flex:1.5}},`Remarque: ${e.remarque}`)
                    )
                  )
                ))
              )
            ),
            h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'12px'}},
              h(Field,{label:'COMMENTAIRES :'},h('div',{style:{...S.textarea,background:T.paper,padding:10,whiteSpace:'pre-wrap',minHeight:'auto'}},report.commentaires||[report.incidents,report.discipline,report.observations].filter(Boolean).join('\n\n')||'\u2014'))
            ),
            h('div', {style:{display:'flex',flexDirection:'column',gap:'8px'}},
              h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'6px'}},
                h('span',{style:{fontSize:'13px',fontWeight:500,color:T.ink2}},"Est-ce que les décisions de l'Arbitre ont impacté le match ?"),
                h('div',{style:{fontWeight:700}},report.decisionsImpacte||'\u2014')
              ),
              h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'6px'}},
                h('span',{style:{fontSize:'13px',fontWeight:500,color:T.ink2}},"L'Arbitre est-il récommandé pour un autre match ?"),
                h('div',{style:{fontWeight:700}},report.arbitreRecommande||'\u2014')
              ),
              h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'6px'}},
                h('span',{style:{fontSize:'13px',fontWeight:500,color:T.ink2}},"Faut-il mettre en place un suivi particulier ?"),
                h('div',{style:{fontWeight:700}},report.suiviParticulier||'\u2014')
              )
            )
          )
        )
      );
    })()
  );
}

/* ─── RAPPORTS ARBITRES (comptabilité) ─── */
function CRapports({rapports,matchs,feuilles,actS}){
  const[viewId,sViewId]=useState(null);
  const feuilleMatchIds=new Set(feuilles.map(f=>f.matchId));
  const rows=(rapports||[]).filter(r=>!actS||!r.saisonId||r.saisonId===actS.id)
    .map(r=>{const m=matchs.find(x=>x.id===r.matchId);return{...r,m,traite:feuilleMatchIds.has(r.matchId)};})
    .sort((a,b)=>String(b.dateEnvoi||'').localeCompare(String(a.dateEnvoi||'')));
  const cur=rows.find(r=>r.id===viewId);
  if(viewId&&cur)return h(Section,null,
    h('div',{style:{display:'flex',alignItems:'center',gap:14,marginBottom:8}},
      h(Btn,{variant:'ghost',onClick:()=>sViewId(null)},'\u2190 Retour'),
      h('div',{className:'disp',style:{fontSize:24,fontWeight:600,color:C.ink}},
        cur.m?`${cur.m.dom} \u2014 ${cur.m.vis}`:'Rapport'),
      h(Btn,{variant:'soft',size:'sm',onClick:printReport,style:{marginLeft:'auto'}},'Imprimer le rapport')),
    h(Card,null,
      h(CardHead,{title:'Rapport officiel du match',sub:`Envoy\u00e9 le ${cur.dateEnvoi||'\u2014'} par ${cur.redacteurNom}`,
        right:cur.traite?h(Badge,{tone:'green'},'Feuille valid\u00e9e'):h(Badge,{tone:'blue'},'En attente de validation')}),
      h('div',{className:'print-area',style:{
        border:`2px solid ${T.line}`,
        padding:'28px',
        background:T.paper,
        display:'flex',
        flexDirection:'column',
        gap:'24px',
        fontFamily:'inherit'
      }},
        h('div', {style:{display:'flex',alignItems:'center',gap:'20px',borderBottom:`2px solid ${T.line}`,paddingBottom:'16px'}},
            h('img', {src:'/reflogo.avif', style:{
              width:'64px',
              height:'64px',
              objectFit:'contain',
              borderRadius:'8px',
              boxShadow:'0 4px 10px rgba(0,0,0,0.1)'
            }}),
            h('div', {style:{display:'flex',flexDirection:'column',gap:'4px'}},
              h('div', {style:{fontSize:'18px',fontWeight:800,color:C.ink,letterSpacing:'0.05em'}}, 'COMMISSION F\u00c9D\u00c9RALE DES ARBITRES'),
              h('div', {style:{fontSize:'12px',fontWeight:600,color:T.ink3,textTransform:'uppercase',letterSpacing:'0.1em'}}, 'Rapport Officiel d\'Arbitrage')
            )
          ),
        // DATE, DIVISION, N° MATCH
        h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px',borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
          h(Field,{label:'DATE :'},h('div',{style:S.field},cur.m?.date||'\u2014')),
          h(Field,{label:'DIVISION :'},h('div',{style:S.field},cur.m?.competition||'\u2014')),
          h(Field,{label:'N° DU MATCH :'},h('div',{style:S.field},cur.numMatch||cur.matchId||'\u2014'))
        ),
        // EQUIPE A, EQUIPE B
        h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
          h(Field,{label:'EQUIPE A :'},h('div',{style:{...S.field,fontWeight:700}},cur.m?.dom||'\u2014')),
          h(Field,{label:'EQUIPE B :'},h('div',{style:{...S.field,fontWeight:700}},cur.m?.vis||'\u2014'))
        ),
        // SCORE, EN FAVEUR DE
        h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px',borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
          h(Field,{label:`SCORE ${cur.m?.dom}`},h('div',{style:S.field},cur.scoreDom)),
          h(Field,{label:`SCORE ${cur.m?.vis}`},h('div',{style:S.field},cur.scoreVis)),
          h(Field,{label:'EN FAVEUR DE :'},h('div',{style:S.field},cur.enFaveurDe||(cur.scoreDom > cur.scoreVis ? cur.m?.dom : cur.scoreVis > cur.scoreDom ? cur.m?.vis : 'Nul')||'\u2014'))
        ),
        // ASSESSEUR
        h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
          h(Field,{label:'ASSESSEUR :'},h('div',{style:S.field},cur.assesseur||'\u2014'))
        ),
        // EQUIPE ARBITRALE
        h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
          h('div',{style:S.label,marginBottom:'12px'},'EQUIPE ARBITRALE'),
          h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px'}},
            (cur.equipe||[]).map((e,i)=>h('div',{key:i,style:{borderBottom:`1px solid ${T.hair}`,paddingBottom:'8px'}},
              h(Field,{label:`${e.role==='Central'?'ARBITRE 1 (CENTRAL)':e.role==='Assistant'&&i===1?'ARBITRE 2 (ASSISTANT 1)':e.role==='Assistant'&&i===2?'ARBITRE 3 (ASSISTANT 2)':'ARBITRE 4 (4ème)'} :`},
                h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}},
                  h('span',{style:{fontWeight:600,fontSize:'14px',flex:1}},e.nom||'\u2014'),
                  h(Badge,{tone:e.present?'green':'red'},e.present?'Présent':'Absent'),
                  e.remarque&&h('span',{style:{fontSize:'13px',fontStyle:'italic',color:T.ink3,flex:1.5}},`Remarque: ${e.remarque}`)
                )
              )
            ))
          )
        ),
        // COMMENTAIRES
        h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
          h(Field,{label:'COMMENTAIRES :'},h('div',{style:{...S.textarea,background:T.paper,padding:12,whiteSpace:'pre-wrap'}},cur.commentaires||[cur.incidents,cur.discipline,cur.observations].filter(Boolean).join('\n\n')||'\u2014'))
        ),
        // QUESTIONS
        h('div', {style:{display:'flex',flexDirection:'column',gap:'12px'}},
          h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'8px'}},
            h('span',{style:{fontSize:'13.5px',fontWeight:500,color:T.ink2}},"Est-ce que les décisions de l'Arbitre ont impacté le match ?"),
            h('div',{style:{fontWeight:700}},cur.decisionsImpacte||'\u2014')
          ),
          h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'8px'}},
            h('span',{style:{fontSize:'13.5px',fontWeight:500,color:T.ink2}},"L'Arbitre est-il récommandé pour un autre match ?"),
            h('div',{style:{fontWeight:700}},cur.arbitreRecommande||'\u2014')
          ),
          h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'8px'}},
            h('span',{style:{fontSize:'13.5px',fontWeight:500,color:T.ink2}},"Faut-il mettre en place un suivi particulier ?"),
            h('div',{style:{fontWeight:700}},cur.suiviParticulier||'\u2014')
          )
        )
      )
    )
  );
  return h(Section,null,
    h(Card,null,
      h(CardHead,{title:'Rapports arbitres re\u00e7us',sub:`${rows.length} rapport(s) transmis apr\u00e8s match`}),
      rows.length===0?h('div',{style:ST.empty},'Aucun rapport re\u00e7u. L\u2019arbitre central transmet son rapport depuis le module Arbitre.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Match','Date match','Arbitre central','Score','Date envoi','Statut',''].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...rows.map(r=>h('tr',{key:r.id},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},r.m?`${r.m.dom} \u2014 ${r.m.vis}`:'\u2014'),
          h('td',{style:ST.td},r.m?.date||'\u2014'),
          h('td',{style:ST.td},r.redacteurNom),
          h('td',{style:{...ST.td,textAlign:'center',fontWeight:700}},`${r.scoreDom} \u2013 ${r.scoreVis}`),
          h('td',{style:ST.td},r.dateEnvoi||'\u2014'),
          h('td',{style:ST.td},r.traite?h(Badge,{tone:'green'},'Trait\u00e9'):h(Badge,{tone:'blue'},'\u00c0 valider')),
          h('td',{style:{...ST.td,textAlign:'right'}},h(Btn,{variant:'soft',size:'sm',onClick:()=>sViewId(r.id)},'Consulter')))))))));
}

function CRecap({feuilles,presences,sancApp,taux,saisons}){
  const[fS,sFS]=useState('');const[fM,sFM]=useState('');
  const rows=useMemo(()=>{
    const valid=feuilles.filter(f=>{
      if(f.statut!=='Valid\u00e9e')return false;
      if(fS&&f.saisonId!==parseInt(fS))return false;
      if(fM&&!(f.dateMatch||'').startsWith(fM))return false;
      return true;
    });
    const byA={};
    valid.forEach(f=>presences.filter(p=>p.feuilleId===f.id&&p.present).forEach(p=>{
      const nom=p.nomArbitre||'\u2014';
      if(!byA[nom])byA[nom]={nom,nb:0,brut:0,ded:0,net:0,roles:{}};
      const t=taux.find(t=>t.saisonId===f.saisonId&&t.division===f.divisionRetenue&&t.role===p.roleArbitre);
      const brut=t?t.montant:0;
      const ded=sancApp.filter(s=>s.presenceId===p.id).reduce((a,s)=>a+s.montantApplique,0);
      byA[nom].nb++;byA[nom].brut+=brut;byA[nom].ded+=ded;byA[nom].net+=brut-ded;
      byA[nom].roles[p.roleArbitre]=(byA[nom].roles[p.roleArbitre]||0)+1;
    }));
    return Object.values(byA).sort((a,b)=>b.net-a.net);
  },[feuilles,presences,sancApp,taux,fS,fM]);
  const tot=rows.reduce((a,r)=>({nb:a.nb+r.nb,brut:a.brut+r.brut,ded:a.ded+r.ded,net:a.net+r.net}),{nb:0,brut:0,ded:0,net:0});
  const months=[...new Set(feuilles.filter(f=>f.statut==='Valid\u00e9e'&&f.dateMatch).map(f=>f.dateMatch.slice(0,7)))].sort().reverse();
  const divisions=[...new Set(feuilles.filter(f=>f.statut==='Valid\u00e9e'&&f.divisionRetenue).map(f=>f.divisionRetenue))];
  const tRole=r=>r==='Central'?'green':r==='Assistant'?'blue':'violet';

  const exportCSV=()=>{
    let csv='Arbitre;Nb Matchs;Brut (FDJ);Deductions (FDJ);Net a payer (FDJ)\n';
    rows.forEach(r=>{csv+=`${r.nom};${r.nb};${r.brut};${r.ded};${r.net}\n`;});
    csv+=`TOTAL;${tot.nb};${tot.brut};${tot.ded};${tot.net}\n`;
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');
    a.href=url;a.download='recap_arbitres.csv';a.click();URL.revokeObjectURL(url);
  };
  const exportPrint=()=>window.print();

  return h(Section,null,
    h(Card,null,
      h(CardHead,{title:'Filtres'}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:18}},
          h(Field,{label:'Saison'},h(Sel,{value:fS,onChange:e=>sFS(e.target.value)},
            h('option',{value:''},'Toutes'),...saisons.map(s=>h('option',{key:s.id,value:s.id},s.libelle)))),
          h(Field,{label:'Mois'},h(Sel,{value:fM,onChange:e=>sFM(e.target.value)},
            h('option',{value:''},'Tous'),...months.map(m=>h('option',{key:m,value:m},m))))))),
    h(Card,null,
      h(CardHead,{title:'R\u00e9capitulatif par arbitre',sub:`${rows.length} arbitre(s)`,
        right:h('div',{style:{display:'flex',gap:8}},
          h(Btn,{variant:'soft',size:'sm',onClick:exportPrint},'Imprimer / PDF'))}),
      rows.length===0?h('div',{style:ST.empty},'Aucune donn\u00e9e pour ces filtres.'):
      h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Arbitre','R\u00f4les','Matchs','Brut','D\u00e9ductions'].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...rows.map((r,i)=>h('tr',{key:r.nom,style:{background:rowBg(i)}},
          h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},r.nom),
          h('td',{style:ST.td},h('div',{style:{display:'flex',gap:5,flexWrap:'wrap'}},
            ...Object.entries(r.roles).map(([role,nb])=>h(Badge,{key:role,tone:tRole(role)},`${role} \u00d7${nb}`)))),
          h('td',{style:{...ST.td,textAlign:'center',fontWeight:700,color:C.blueD}},r.nb),
          h('td',{style:{...ST.td,textAlign:'right'}},fdj(r.brut)),
          h('td',{style:{...ST.td,textAlign:'right',color:r.ded>0?C.redD:C.ink4}},r.ded>0?`\u2212 ${fdj(r.ded)}`:'\u2014')))),
        h('tfoot',null,h('tr',{style:{background:C.blueL}},
          h('td',{colSpan:2,style:{...ST.td,fontWeight:700,color:C.blueD}},'TOTAL'),
          h('td',{style:{...ST.td,textAlign:'center',fontWeight:700}},tot.nb),
          h('td',{style:{...ST.td,textAlign:'right',fontWeight:700}},fdj(tot.brut)),
          h('td',{style:{...ST.td,textAlign:'right',fontWeight:700,color:C.redD}},tot.ded>0?`\u2212 ${fdj(tot.ded)}`:'\u2014'))))))
  );
}

/* ═══════════════════════════════════════════
   MODULE ASSIGNATION (conteneur avec sous-onglets)
═══════════════════════════════════════════ */


/* ═══════════════════════════════════════════
   APP
═══════════════════════════════════════════ */
/* ════════════════════════════════════════════
   NOUVEAU MODÈLE — Saison → Divisions(+clubs) → Compétitions(+divisions,+arbitres)
════════════════════════════════════════════ */

/* ─── SAISONS : cadre temporel, créé en premier ─── */
function SaisonsTab({saisons,setSaisons,taux,setTaux,divisions,setDivisions,competitions,setCompetitions}){
  const[lib,sLib]=useState('');const[dd,sDd]=useState('');const[df,sDf]=useState('');
  const[n,sN]=useState(null);const[confirm,sConfirm]=useState(null);
  const create=()=>{
    if(!lib.trim()){sN({msg:'Libell\u00e9 obligatoire.',tone:'err'});return;}
    const id=nid(saisons);
    setSaisons(p=>[...p,{id,libelle:lib.trim(),dateDebut:dd,dateFin:df,statut:'Brouillon'}]);
    sN({msg:`Saison \u00ab ${lib} \u00bb cr\u00e9\u00e9e. D\u00e9finissez ses divisions, puis ses comp\u00e9titions.`,tone:'ok'});
    sLib('');sDd('');sDf('');
  };
  const tStat=s=>s==='Active'?'green':s==='Brouillon'?'amber':'neutral';
  const askDel=s=>sConfirm({title:'Supprimer la saison',
    message:`La saison \u00ab ${s.libelle} \u00bb, ses divisions, compositions et taux seront supprim\u00e9s. Action irr\u00e9versible.`,
    confirmLabel:'Supprimer',confirmVariant:'dangerSolid',
    onConfirm:()=>{setSaisons(p=>p.filter(x=>x.id!==s.id));setDivisions(p=>p.filter(d=>d.saisonId!==s.id));
      setCompetitions(p=>p.filter(co=>co.saisonId!==s.id));setTaux(p=>p.filter(t=>t.saisonId!==s.id));
      sConfirm(null);sN({msg:'Saison supprim\u00e9e.',tone:'ok'});}});
  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(ConfirmModal,{show:!!confirm,...(confirm||{}),onCancel:()=>sConfirm(null)}),
    h(Card,null,
      h(CardHead,{title:'Cr\u00e9er une saison',sub:'Le point de d\u00e9part.'}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:22}},
          h(Field,{label:'Libell\u00e9'},h(Inp,{value:lib,onChange:e=>sLib(e.target.value),placeholder:'2024-2025'})),
          h(Field,{label:'D\u00e9but'},h(Inp,{value:dd,onChange:e=>sDd(e.target.value),type:'date'})),
          h(Field,{label:'Fin'},h(Inp,{value:df,onChange:e=>sDf(e.target.value),type:'date'}))),
        h('div',{style:{marginTop:22}},h(Btn,{variant:'primary',onClick:create},'Cr\u00e9er la saison'))),
    ),
    h(Card,null,
      h(CardHead,{title:'Saisons',sub:`${saisons.length} au total`}),
      saisons.length===0?h('div',{style:ST.empty},'Aucune saison.'):
      h('table',{style:ST.table},
        h('thead',null,h('tr',null,['Saison','P\u00e9riode','Divisions','Comp\u00e9titions','Statut',''].map(x=>h('th',{key:x,style:ST.th},x)))),
        h('tbody',null,...saisons.map((s,i)=>{
          const nd=divisions.filter(d=>d.saisonId===s.id).length;
          const nc=competitions.filter(c=>c.saisonId===s.id).length;
          return h('tr',{key:s.id},
            h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},s.libelle),
            h('td',{style:ST.td},s.dateDebut&&s.dateFin?`${s.dateDebut} \u2192 ${s.dateFin}`:'\u2014'),
            h('td',{style:{...ST.td,textAlign:'center'}},nd),
            h('td',{style:{...ST.td,textAlign:'center'}},nc),
            h('td',{style:ST.td},h(Badge,{tone:tStat(s.statut)},s.statut)),
            h('td',{style:{...ST.td,textAlign:'right'}},h(Btn,{variant:'ghost',size:'sm',onClick:()=>askDel(s)},'Supprimer')));
        }))))
  );
}

/* ─── DIVISIONS : créées dans une saison, clubs rattachés ─── */
function DivisionsTab({divisions,setDivisions,saisons,clubs,arbitres,taux,setTaux}){
  const[saisonId,sSaisonId]=useState('');
  const[nom,sNom]=useState('');const[rang,sRang]=useState(1);
  const[n,sN]=useState(null);const[confirm,sConfirm]=useState(null);
  const[expanded,sExpanded]=useState(null);
  const sid=saisonId?parseInt(saisonId):null;
  const simSaison=saisons.find(s=>s.id===sid);
  const divs=divisions.filter(d=>d.saisonId===sid).sort((a,b)=>a.rang-b.rang);
  const roles=['Central','Assistant','4\u00e8me Arbitre'];

  const addDiv=()=>{
    if(!sid){sN({msg:'S\u00e9lectionnez une saison.',tone:'err'});return;}
    if(!nom.trim()){sN({msg:'Nom de division obligatoire.',tone:'err'});return;}
    const did=uid();
    setDivisions(p=>[...p,{id:did,saisonId:sid,nom:nom.trim(),rang:parseInt(rang)||1,clubIds:[],arbitreIds:[]}]);
    // générer les taux pour cette division
    setTaux(p=>[...p,...roles.map(r=>({id:uid(),saisonId:sid,divisionId:did,division:nom.trim(),rang:parseInt(rang)||1,role:r,montant:0}))]);
    sN({msg:`Division \u00ab ${nom} \u00bb ajout\u00e9e.`,tone:'ok'});sNom('');sRang(divs.length+2);
  };
  const toggleClub=(did,clubId)=>setDivisions(p=>p.map(d=>{
    if(d.id!==did)return d;
    const has=(d.clubIds||[]).includes(clubId);
    return{...d,clubIds:has?d.clubIds.filter(x=>x!==clubId):[...(d.clubIds||[]),clubId]};
  }));
  const toggleArb=(did,arbId)=>setDivisions(p=>p.map(d=>{
    if(d.id!==did)return d;
    const has=(d.arbitreIds||[]).includes(arbId);
    return{...d,arbitreIds:has?d.arbitreIds.filter(x=>x!==arbId):[...(d.arbitreIds||[]),arbId]};
  }));
  const delDiv=d=>sConfirm({title:'Supprimer la division',
    message:`La division \u00ab ${d.nom} \u00bb et ses taux seront supprim\u00e9s.`,
    confirmLabel:'Supprimer',confirmVariant:'dangerSolid',
    onConfirm:()=>{setDivisions(p=>p.filter(x=>x.id!==d.id));setTaux(p=>p.filter(t=>t.divisionId!==d.id));sConfirm(null);}});

  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(ConfirmModal,{show:!!confirm,...(confirm||{}),onCancel:()=>sConfirm(null)}),
    h(Card,null,
      h(CardHead,{title:'Divisions',sub:'Cr\u00e9\u00e9es dans une saison, avec leurs clubs et arbitres.'}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'2fr 2fr 1fr',gap:22,alignItems:'flex-end'}},
          h(Field,{label:'Saison'},h(Sel,{value:saisonId,onChange:e=>{sSaisonId(e.target.value);sExpanded(null);}},
            h('option',{value:''},'\u2014 Choisir \u2014'),...saisons.map(s=>h('option',{key:s.id,value:s.id},s.libelle)))),
          h(Field,{label:'Nom de la division'},h(Inp,{value:nom,onChange:e=>sNom(e.target.value),placeholder:'D1, \u00c9lite, Honneur...'})),
          h(Field,{label:'Rang (1 = sup.)'},h(Inp,{value:rang,onChange:e=>sRang(e.target.value),type:'number',style:{textAlign:'center'}}))),
        h('div',{style:{marginTop:22}},h(Btn,{variant:'primary',onClick:addDiv,disabled:!sid},'Ajouter la division')))),
    sid&&h(Card,null,
      h(CardHead,{title:`Divisions \u2014 ${simSaison?.libelle||''}`,sub:`${divs.length} division(s)`}),
      divs.length===0?h('div',{style:ST.empty},'Aucune division pour cette saison.'):
      h(Stack,{gap:0},...divs.map(d=>{
        const open=expanded===d.id;
        const nbClubs=(d.clubIds||[]).length;const nbArb=(d.arbitreIds||[]).length;
        return h('div',{key:d.id,style:{borderBottom:`1px solid ${T.hair}`}},
          h('div',{style:{display:'flex',alignItems:'center',gap:16,padding:'16px 0'}},
            h('span',{className:'narrow',style:{fontSize:13,fontWeight:700,color:T.green,width:24}},d.rang),
            h('span',{className:'disp',style:{fontSize:20,fontWeight:600,color:T.ink,flex:1}},d.nom),
            h('span',{style:{fontSize:12.5,color:T.ink3}},`${nbClubs} club(s) \u00b7 ${nbArb} arbitre(s)`),
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>sExpanded(open?null:d.id)},open?'Fermer':'Configurer'),
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>delDiv(d)},'Supprimer')),
          open&&h('div',{style:{padding:'4px 0 20px 40px',display:'flex',flexDirection:'column',gap:18}},
            h('div',null,
              h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:10}},'Clubs de la division'),
              clubs.length===0?h('p',{style:{fontSize:13,color:T.ink4,fontStyle:'italic'}},'Aucun club enregistr\u00e9.'):
              h('div',{style:{display:'flex',flexWrap:'wrap',gap:8}},
                ...clubs.map(cl=>{
                  const on=(d.clubIds||[]).includes(cl.id);
                  return h('button',{key:cl.id,onClick:()=>toggleClub(d.id,cl.id),
                    style:{padding:'6px 13px',border:`1px solid ${on?T.green:T.hair}`,
                      background:on?T.greenL:'transparent',color:on?T.greenInk:T.ink2,
                      fontSize:12.5,fontWeight:on?600:500,cursor:'pointer',transition:'all .12s',
                      fontFamily:"'Archivo',sans-serif"}},
                    (on?'\u2713 ':'')+cl.nom);
                }))),
            h('div',null,
              h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:10}},'Arbitres de la division'),
              arbitres.length===0?h('p',{style:{fontSize:13,color:T.ink4,fontStyle:'italic'}},'Aucun arbitre enregistr\u00e9.'):
              h('div',{style:{display:'flex',flexWrap:'wrap',gap:8}},
                ...arbitres.map(a=>{
                  const on=(d.arbitreIds||[]).includes(a.id);
                  return h('button',{key:a.id,onClick:()=>toggleArb(d.id,a.id),
                    style:{padding:'6px 13px',border:`1px solid ${on?T.green:T.hair}`,
                      background:on?T.greenL:'transparent',color:on?T.greenInk:T.ink2,
                      fontSize:12.5,fontWeight:on?600:500,cursor:'pointer',transition:'all .12s',
                      fontFamily:"'Archivo',sans-serif"}},
                    (on?'\u2713 ':'')+a.prenom+' '+a.nom+(a.type?' ('+a.type+')':''));
                })))));
      })))
  );
}

/* ─── COMPÉTITIONS : créées dans une saison, divisions rattachées ─── */
function CompetitionsTab({competitions,setCompetitions,saisons,divisions}){
  const[saisonId,sSaisonId]=useState('');
  const[nom,sNom]=useState('');const[type,sType]=useState('');
  const[n,sN]=useState(null);const[expanded,sExpanded]=useState(null);
  const sid=saisonId?parseInt(saisonId):null;
  const comps=competitions.filter(c=>c.saisonId===sid);
  const saisonDivs=divisions.filter(d=>d.saisonId===sid).sort((a,b)=>a.rang-b.rang);

  const addComp=()=>{
    if(!sid){sN({msg:'S\u00e9lectionnez une saison.',tone:'err'});return;}
    if(!nom.trim()){sN({msg:'Nom de comp\u00e9tition obligatoire.',tone:'err'});return;}
    setCompetitions(p=>[...p,{id:nid(p),saisonId:sid,nom:nom.trim(),type,divisionIds:[]}]);
    sN({msg:`Comp\u00e9tition \u00ab ${nom} \u00bb cr\u00e9\u00e9e. Rattachez ses divisions.`,tone:'ok'});sNom('');sType('');
  };
  const toggleDiv=(cid,did)=>setCompetitions(p=>p.map(c=>{
    if(c.id!==cid)return c;
    const has=(c.divisionIds||[]).includes(did);
    return{...c,divisionIds:has?c.divisionIds.filter(x=>x!==did):[...(c.divisionIds||[]),did]};
  }));
  const delComp=c=>setCompetitions(p=>p.filter(x=>x.id!==c.id));

  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(Card,null,
      h(CardHead,{title:'Comp\u00e9titions',sub:'Rattach\u00e9es \u00e0 une saison, avec leurs divisions.'}),
      h('div',{style:ST.body},
        h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'2fr 2fr 1.5fr',gap:22,alignItems:'flex-end'}},
          h(Field,{label:'Saison'},h(Sel,{value:saisonId,onChange:e=>{sSaisonId(e.target.value);sExpanded(null);}},
            h('option',{value:''},'\u2014 Choisir \u2014'),...saisons.map(s=>h('option',{key:s.id,value:s.id},s.libelle)))),
          h(Field,{label:'Nom'},h(Inp,{value:nom,onChange:e=>sNom(e.target.value),placeholder:'Coupe de Djibouti'})),
          h(Field,{label:'Type'},h(Sel,{value:type,onChange:e=>sType(e.target.value)},
            h('option',{value:''},'\u2014'),...['Championnat','Coupe','Tournoi','Amical','Super Coupe'].map(x=>h('option',{key:x,value:x},x))))),
        h('div',{style:{marginTop:22}},h(Btn,{variant:'primary',onClick:addComp,disabled:!sid},'Cr\u00e9er la comp\u00e9tition')))),
    sid&&h(Card,null,
      h(CardHead,{title:'Comp\u00e9titions de la saison',sub:`${comps.length} comp\u00e9tition(s)`}),
      comps.length===0?h('div',{style:ST.empty},'Aucune comp\u00e9tition.'):
      h(Stack,{gap:0},...comps.map(co=>{
        const open=expanded===co.id;
        return h('div',{key:co.id,style:{borderBottom:`1px solid ${T.hair}`}},
          h('div',{style:{display:'flex',alignItems:'center',gap:16,padding:'16px 0'}},
            h('span',{className:'disp',style:{fontSize:20,fontWeight:600,color:T.ink,flex:1}},co.nom),
            co.type&&h(Badge,{tone:'neutral'},co.type),
            h('span',{style:{fontSize:12.5,color:T.ink3}},`${(co.divisionIds||[]).length} division(s)`),
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>sExpanded(open?null:co.id)},open?'Fermer':'Divisions'),
            h(Btn,{variant:'ghost',size:'sm',onClick:()=>delComp(co)},'Supprimer')),
          open&&h('div',{style:{padding:'4px 0 20px'}},
            h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:10}},'Divisions concern\u00e9es'),
            saisonDivs.length===0?h('p',{style:{fontSize:13,color:T.ink4,fontStyle:'italic'}},'Cr\u00e9ez d\u2019abord des divisions pour cette saison.'):
            h('div',{style:{display:'flex',flexWrap:'wrap',gap:8}},
              ...saisonDivs.map(d=>{
                const on=(co.divisionIds||[]).includes(d.id);
                return h('button',{key:d.id,onClick:()=>toggleDiv(co.id,d.id),
                  style:{padding:'6px 13px',border:`1px solid ${on?T.green:T.hair}`,
                    background:on?T.greenL:'transparent',color:on?T.greenInk:T.ink2,
                    fontSize:12.5,fontWeight:on?600:500,cursor:'pointer',fontFamily:"'Archivo',sans-serif"}},
                  (on?'\u2713 ':'')+d.nom+` (rang ${d.rang})`);
              }))));
      })))
  );
}

/* ═══════════════════════════════════════════
   MODULE ARBITRE — espace personnel
═══════════════════════════════════════════ */
const refFullName=a=>`${a.nom} ${a.prenom}`;
const roleOnMatch=(m,nm)=>{
  if(m.ac===nm)return'Central';
  if(m.a4===nm)return'4\u00e8me Arbitre';
  if(m.a1===nm||m.a2===nm)return'Assistant';
  return null;
};
const netPresence=(p,f,sancApp,taux)=>{
  if(!p||!p.present)return{brut:0,ded:0,net:0};
  const t=taux.find(t=>t.saisonId===f.saisonId&&t.division===f.divisionRetenue&&t.role===p.roleArbitre);
  const brut=t?t.montant:0;
  const ded=sancApp.filter(s=>s.presenceId===p.id).reduce((a,s)=>a+s.montantApplique,0);
  return{brut,ded,net:brut-ded};
};

function RefGate({arbitre,children}){
  if(!arbitre)return h(Card,null,
    h(CardHead,{title:'Identification requise',sub:'S\u00e9lectionnez votre profil dans Mon compte pour acc\u00e9der \u00e0 cette section.'}),
    h('div',{style:ST.empty},'Aucun arbitre s\u00e9lectionn\u00e9.'));
  return children;
}

function RefIdentiteTab({arbitres,refId,setRefId}){
  const[n,sN]=useState(null);
  const pick=id=>{setRefId(id);const a=arbitres.find(x=>x.id===id);sN(a?{msg:`Connect\u00e9 en tant que ${refFullName(a)}.`,tone:'ok'}:null);};
  const cur=arbitres.find(a=>a.id===refId);
  return h(Section,null,
    h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
    h(Card,null,
      h(CardHead,{title:'Mon compte',sub:'Identifiez-vous pour consulter vos d\u00e9signations et paiements.'}),
      cur&&h('div',{style:{padding:'0 0 20px',borderBottom:`1px solid ${T.hair}`,marginBottom:20}},
        h('div',{className:'disp',style:{fontSize:28,fontWeight:500,color:T.ink,marginBottom:8}},refFullName(cur)),
        h('div',{style:{display:'flex',gap:8,flexWrap:'wrap'}},
          cur.type&&h(Badge,{tone:cur.type==='Central'?'green':'blue'},cur.type),
          cur.statut&&h(Badge,{tone:cur.statut==='Actif'?'green':cur.statut==='Suspendu'?'amber':'neutral'},cur.statut),
          cur.niveau&&h(Badge,{tone:'neutral'},cur.niveau))),
      arbitres.length===0?h('div',{style:ST.empty},'Aucun arbitre enregistr\u00e9. Contactez le service d\u2019assignation.'):
      h('div',{style:{display:'flex',flexDirection:'column',gap:8}},
        ...arbitres.filter(a=>a.statut==='Actif'||a.id===refId).map(a=>{
          const on=a.id===refId;
          return h('button',{key:a.id,onClick:()=>pick(a.id),
            style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,
              padding:'14px 16px',textAlign:'left',cursor:'pointer',transition:'all .12s',
              background:on?T.greenL:'transparent',border:`1px solid ${on?T.green:T.hair}`,
              fontFamily:"'Archivo',sans-serif"}},
            h('span',{style:{fontWeight:on?700:500,color:T.ink}},refFullName(a)),
            h('span',{style:{fontSize:12,color:T.ink3}},a.type||'\u2014',on&&h(Badge,{tone:'green'},'actif')));
        })),
      refId&&h('div',{style:{marginTop:20}},
        h(Btn,{variant:'ghost',onClick:()=>{setRefId(null);sN({msg:'D\u00e9connect\u00e9.',tone:'info'});}},'Changer d\u2019arbitre / D\u00e9connexion'))));
}

function RefDesignationsTab({arbitre,matchs,feuilles,refConfirmations,setRefConfirmations,actS}){
  const nm=refFullName(arbitre);
  const today=new Date().toISOString().slice(0,10);
  const feuilleMatchIds=new Set(feuilles.map(f=>f.matchId));
  const rows=matchs.filter(m=>m.submitted&&roleOnMatch(m,nm))
    .sort((a,b)=>String(a.date||'').localeCompare(String(b.date||'')));
  const aVenir=rows.filter(m=>(m.date||'')>=today&&!feuilleMatchIds.has(m.id));
  const passes=rows.filter(m=>(m.date||'')<today&&!feuilleMatchIds.has(m.id));
  const confirme=mid=>refConfirmations.some(c=>c.matchId===mid&&c.arbitreId===arbitre.id);
  const doConfirm=m=>{
    if(confirme(m.id))return;
    setRefConfirmations(p=>[...p,{matchId:m.id,arbitreId:arbitre.id,date:new Date().toISOString().slice(0,10)}]);
  };
  const MatchTable=({list,empty})=>list.length===0?h('div',{style:ST.empty},empty):
    h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
      h('thead',null,h('tr',null,['Match','Date','Heure','Comp\u00e9tition','R\u00f4le','Lieu','Confirmation'].map(x=>h('th',{key:x,style:ST.th},x)))),
      h('tbody',null,...list.map(m=>h('tr',{key:m.id},
        h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},`${m.dom} \u2014 ${m.vis}`),
        h('td',{style:ST.td},m.date||'\u2014'),
        h('td',{style:ST.td},m.heure||'\u2014'),
        h('td',{style:ST.td},m.competition?h(Badge,{tone:'violet'},m.competition):'\u2014'),
        h('td',{style:ST.td},h(Badge,{tone:roleOnMatch(m,nm)==='Central'?'green':roleOnMatch(m,nm)==='Assistant'?'blue':'violet'},roleOnMatch(m,nm))),
        h('td',{style:ST.td},m.stade||'\u2014'),
        h('td',{style:ST.td},
          confirme(m.id)
            ? h(Badge,{tone:'green'},'Confirm\u00e9')
            : h(Btn,{variant:'soft',size:'sm',onClick:()=>doConfirm(m)},'Confirmer pr\u00e9sence')))))));
  return h(RefGate,{arbitre},
    h(Section,null,
      !actS&&h(Notice,{msg:'Aucune saison active.',tone:'warn'}),
      h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:0,borderTop:`1px solid ${T.line}`,borderBottom:`1px solid ${T.line}`,marginBottom:32}},
        [{l:'\u00c0 venir',v:aVenir.length},{l:'Pass\u00e9s (non valid\u00e9s)',v:passes.length},{l:'Total d\u00e9sign\u00e9s',v:rows.length}]
          .map((s,i)=>h('div',{key:s.l,style:{padding:'18px 16px',borderRight:i<2?`1px solid ${T.hair}`:'none'}},
            h('div',{className:'disp',style:{fontSize:34,fontWeight:700,color:T.ink,lineHeight:1}},s.v),
            h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,marginTop:6,letterSpacing:'0.08em',textTransform:'uppercase'}},s.l)))),
      h(Card,null,
        h(CardHead,{title:'Prochaines d\u00e9signations',sub:'Matchs soumis par l\u2019assignation \u2014 confirmez votre pr\u00e9sence.'}),
        MatchTable({list:aVenir,empty:'Aucune d\u00e9signation \u00e0 venir.'})),
      passes.length>0&&h(Card,null,
        h(CardHead,{title:'Matchs pass\u00e9s en attente de feuille',sub:'En attente de validation comptable.'}),
        MatchTable({list:passes,empty:''}))));
}

function RefRapportsTab({arbitre,matchs,feuilles,rapports,setRapports,actS,saisons}){
  const[n,sN]=useState(null);
  const[editId,sEditId]=useState(null);
  const[scoreDom,sScoreDom]=useState('');
  const[scoreVis,sScoreVis]=useState('');
  const[discipline,sDiscipline]=useState('');
  const[incidents,sIncidents]=useState('');
  const[observations,sObservations]=useState('');
  const[equipe,sEquipe]=useState([]);

  // New state variables
  const[numMatch,sNumMatch]=useState('');
  const[enFaveurDe,sEnFaveurDe]=useState('');
  const[assesseur,sAssesseur]=useState('');
  const[commentaires,sCommentaires]=useState('');
  const[decisionsImpacte,sDecisionsImpacte]=useState('');
  const[arbitreRecommande,sArbitreRecommande]=useState('');
  const[suiviParticulier,sSuiviParticulier]=useState('');

  const nm=refFullName(arbitre);
  const today=new Date().toISOString().slice(0,10);
  const feuilleIds=new Set(feuilles.map(f=>f.matchId));
  const isCentral=roleOnMatch(arbitre?{ac:nm}:{} ,nm)==='Central';
  const rapportOf=mid=>(rapports||[]).find(r=>r.matchId===mid);
  const aRapporter=matchs.filter(m=>m.submitted&&m.ac===nm&&(m.date||'')<=today&&!feuilleIds.has(m.id));
  const envoyes=(rapports||[]).filter(r=>r.arbitreId===arbitre?.id)
    .sort((a,b)=>String(b.dateEnvoi||'').localeCompare(String(a.dateEnvoi||'')));

  const openForm=m=>{
    const rp=rapportOf(m.id);
    sEditId(m.id);
    sScoreDom(rp?.scoreDom||'');
    sScoreVis(rp?.scoreVis||'');
    sDiscipline(rp?.discipline||'');
    sIncidents(rp?.incidents||'');
    sObservations(rp?.observations||'');
    sEquipe(rp?.equipe||[
      {nom:m.ac||'',role:'Central',present:true,remarque:''},
      {nom:m.a1||'',role:'Assistant',present:true,remarque:''},
      {nom:m.a2||'',role:'Assistant',present:true,remarque:''},
      {nom:m.a4||'',role:'4\u00e8me Arbitre',present:true,remarque:''}]);

    sNumMatch(rp?.numMatch||m.id||'');
    sEnFaveurDe(rp?.enFaveurDe||'');
    sAssesseur(rp?.assesseur||'');
    sCommentaires(rp?.commentaires||'');
    sDecisionsImpacte(rp?.decisionsImpacte||'');
    sArbitreRecommande(rp?.arbitreRecommande||'');
    sSuiviParticulier(rp?.suiviParticulier||'');

    sN(null);window.scrollTo({top:0,behavior:'smooth'});
  };
  const updEq=(i,k,v)=>sEquipe(p=>{const x=[...p];x[i]={...x[i],[k]:v};return x;});
  const envoyer=()=>{
    const m=matchs.find(x=>x.id===editId);
    if(!m){return;}
    if(scoreDom===''||scoreVis===''){sN({msg:'Le score final est obligatoire.',tone:'err'});return;}
    const ex=rapportOf(editId);
    const payload={
      id:ex?.id||nid(rapports||[]),
      matchId:editId,
      saisonId:actS?.id||saisons.find(s=>s.statut==='Active')?.id,
      arbitreId:arbitre.id,
      redacteurNom:nm,
      scoreDom,scoreVis,
      discipline:'',
      incidents:commentaires,
      observations:'',
      equipe,
      numMatch,
      enFaveurDe,
      assesseur,
      commentaires,
      decisionsImpacte,
      arbitreRecommande,
      suiviParticulier,
      statut:'Envoy\u00e9',
      dateEnvoi:new Date().toISOString().slice(0,10),
    };
    setRapports(p=>ex?p.map(r=>r.matchId===editId?payload:r):[...p,payload]);
    sN({msg:ex?'Rapport mis \u00e0 jour et renvoy\u00e9 \u00e0 la comptabilit\u00e9.':'Rapport envoy\u00e9 \u00e0 la comptabilit\u00e9.',tone:'ok'});
    sEditId(null);
  };
  const curM=matchs.find(m=>m.id===editId);

  if(editId&&curM)return h(RefGate,{arbitre},
    h(Section,null,
      h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
      h('div',{style:{display:'flex',alignItems:'center',gap:14}},
        h(Btn,{variant:'ghost',onClick:()=>sEditId(null)},'\u2190 Retour'),
        h('div',{className:'disp',style:{fontSize:24,fontWeight:600,color:C.ink}},`${curM.dom} \u2014 ${curM.vis}`)),
      h(Card,null,
        h(CardHead,{title:'Rapport de match',sub:'Transmis \u00e0 la comptabilit\u00e9 pour validation de la feuille.',right:h(Btn,{variant:'soft',size:'sm',onClick:printReport},'Imprimer')}),
        h('div',{className:'print-area',style:{
          border:`2px solid ${T.line}`,
          padding:'28px',
          background:T.paper,
          display:'flex',
          flexDirection:'column',
          gap:'24px',
          fontFamily:'inherit'
        }},
          h('div', {style:{display:'flex',alignItems:'center',gap:'20px',borderBottom:`2px solid ${T.line}`,paddingBottom:'16px'}},
            h('img', {src:'/reflogo.avif', style:{
              width:'64px',
              height:'64px',
              objectFit:'contain',
              borderRadius:'8px',
              boxShadow:'0 4px 10px rgba(0,0,0,0.1)'
            }}),
            h('div', {style:{display:'flex',flexDirection:'column',gap:'4px'}},
              h('div', {style:{fontSize:'18px',fontWeight:800,color:C.ink,letterSpacing:'0.05em'}}, 'COMMISSION F\u00c9D\u00c9RALE DES ARBITRES'),
              h('div', {style:{fontSize:'12px',fontWeight:600,color:T.ink3,textTransform:'uppercase',letterSpacing:'0.1em'}}, 'Rapport Officiel d\'Arbitrage')
            )
          ),
          // DATE, DIVISION, N° MATCH
          h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px',borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
            h(Field,{label:'DATE :'},h('div',{style:S.field},curM.date||'\u2014')),
            h(Field,{label:'DIVISION :'},h('div',{style:S.field},curM.competition||'\u2014')),
            h(Field,{label:'N° DU MATCH :'},h(Inp,{value:numMatch,onChange:e=>sNumMatch(e.target.value),placeholder:'Ex: 101'}))
          ),
          // EQUIPE A, EQUIPE B
          h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
            h(Field,{label:'EQUIPE A :'},h('div',{style:{...S.field,fontWeight:700}},curM.dom||'\u2014')),
            h(Field,{label:'EQUIPE B :'},h('div',{style:{...S.field,fontWeight:700}},curM.vis||'\u2014'))
          ),
          // SCORE, EN FAVEUR DE
          h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px',borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
            h(Field,{label:`SCORE ${curM.dom}`},h(Inp,{value:scoreDom,onChange:e=>sScoreDom(e.target.value),type:'number',placeholder:'0'})),
            h(Field,{label:`SCORE ${curM.vis}`},h(Inp,{value:scoreVis,onChange:e=>sScoreVis(e.target.value),type:'number',placeholder:'0'})),
            h(Field,{label:'EN FAVEUR DE :'},h(Sel,{value:enFaveurDe,onChange:e=>sEnFaveurDe(e.target.value)},
              h('option',{value:''},'\u2014 Choisir \u2014'),
              h('option',{value:curM.dom},curM.dom),
              h('option',{value:curM.vis},curM.vis),
              h('option',{value:'Nul'},'Match Nul')
            ))
          ),
          // ASSESSEUR
          h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
            h(Field,{label:'ASSESSEUR :'},h(Inp,{value:assesseur,onChange:e=>sAssesseur(e.target.value),placeholder:'Nom de l\u2019assesseur'}))
          ),
          // EQUIPE ARBITRALE
          h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
            h('div',{style:S.label,marginBottom:'14px'},'EQUIPE ARBITRALE'),
            h('div', {className:'grid-mobile-1', style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px'}},
              equipe.map((e,i)=>h('div',{key:i,style:{borderBottom:`1px solid ${T.hair}`,paddingBottom:'12px'}},
                h(Field,{label:`${e.role==='Central'?'ARBITRE 1 (CENTRAL)':e.role==='Assistant'&&i===1?'ARBITRE 2 (ASSISTANT 1)':e.role==='Assistant'&&i===2?'ARBITRE 3 (ASSISTANT 2)':'ARBITRE 4 (4ème)'} :`},
                  h('div',{style:{display:'flex',alignItems:'center',gap:'10px',marginTop:'6px'}},
                    h('span',{style:{fontWeight:600,fontSize:'14px',flex:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}},e.nom||'\u2014'),
                    h('div',{style:{width:'95px'}},h(Sel,{value:e.present?'oui':'non',onChange:ev=>updEq(i,'present',ev.target.value==='oui')},
                      h('option',{value:'oui'},'Présent'),
                      h('option',{value:'non'},'Absent')
                    )),
                    h('div',{style:{flex:1.5}},h(Inp,{value:e.remarque||'',onChange:ev=>updEq(i,'remarque',ev.target.value),placeholder:'Remarque...'}))
                  )
                )
              )))
          ),
          // COMMENTAIRES
          h('div', {style:{borderBottom:`1px solid ${T.line}`,paddingBottom:'16px'}},
            h(Field,{label:'COMMENTAIRES :'},h('textarea',{value:commentaires,onChange:e=>sCommentaires(e.target.value),placeholder:'Saisissez les commentaires sur le match...',style:{...S.textarea,minHeight:'120px'}}))
          ),
          // QUESTIONS
          h('div', {style:{display:'flex',flexDirection:'column',gap:'16px'}},
            h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'10px'}},
              h('span',{style:{fontSize:'13.5px',fontWeight:500,color:T.ink2}},"Est-ce que les décisions de l'Arbitre ont impacté le match ?"),
              h('div',{style:{width:120}},h(Sel,{value:decisionsImpacte,onChange:e=>sDecisionsImpacte(e.target.value)},
                h('option',{value:''},'\u2014'),
                h('option',{value:'Oui'},'Oui'),
                h('option',{value:'Non'},'Non')
              ))
            ),
            h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:`1px dotted ${T.hair}`,paddingBottom:'10px'}},
              h('span',{style:{fontSize:'13.5px',fontWeight:500,color:T.ink2}},"L'Arbitre est-il récommandé pour un autre match ?"),
              h('div',{style:{width:120}},h(Sel,{value:arbitreRecommande,onChange:e=>sArbitreRecommande(e.target.value)},
                h('option',{value:''},'\u2014'),
                h('option',{value:'Oui'},'Oui'),
                h('option',{value:'Non'},'Non')
              ))
            ),
            h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'10px'}},
              h('span',{style:{fontSize:'13.5px',fontWeight:500,color:T.ink2}},"Faut-il mettre en place un suivi particulier ?"),
              h('div',{style:{width:120}},h(Sel,{value:suiviParticulier,onChange:e=>sSuiviParticulier(e.target.value)},
                h('option',{value:''},'\u2014'),
                h('option',{value:'Oui'},'Oui'),
                h('option',{value:'Non'},'Non')
              ))
            )
          )
        )),
      h('div',{style:{display:'flex',gap:12,marginTop:20}},
        h(Btn,{variant:'primary',onClick:envoyer},rapportOf(editId)?'Mettre \u00e0 jour et renvoyer':'Envoyer \u00e0 la comptabilit\u00e9'),
        h(Btn,{variant:'ghost',onClick:()=>sEditId(null)},'Annuler'))));

  return h(RefGate,{arbitre},
    h(Section,null,
      h(Notice,{msg:n?.msg,tone:n?.tone,onClose:()=>sN(null)}),
      arbitre?.type!=='Central'&&h(Notice,{msg:'Seul l\u2019arbitre central transmet le rapport officiel apr\u00e8s le match.',tone:'info'}),
      arbitre?.type==='Central'&&h(Card,null,
        h(CardHead,{title:'Matchs \u00e0 rapporter',sub:`${aRapporter.length} match(s) en attente de votre rapport`}),
        aRapporter.length===0?h('div',{style:ST.empty},'Aucun match \u00e0 rapporter pour le moment.'):
        h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
          h('thead',null,h('tr',null,['Match','Date','Comp\u00e9tition','Score','Statut',''].map(x=>h('th',{key:x,style:ST.th},x)))),
          h('tbody',null,...aRapporter.map(m=>{const rp=rapportOf(m.id);return h('tr',{key:m.id},
            h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},`${m.dom} \u2014 ${m.vis}`),
            h('td',{style:ST.td},m.date||'\u2014'),
            h('td',{style:ST.td},m.competition?h(Badge,{tone:'violet'},m.competition):'\u2014'),
            h('td',{style:{...ST.td,textAlign:'center',fontWeight:700}},rp?`${rp.scoreDom} \u2013 ${rp.scoreVis}`:'\u2014'),
            h('td',{style:ST.td},rp?h(Badge,{tone:'green'},'Envoy\u00e9'):h(Badge,{tone:'amber'},'\u00c0 r\u00e9diger')),
            h('td',{style:{...ST.td,textAlign:'right'}},h(Btn,{variant:rp?'soft':'primary',size:'sm',onClick:()=>openForm(m)},rp?'Modifier':'R\u00e9diger le rapport')));}))))),
      envoyes.length>0&&h(Card,null,
        h(CardHead,{title:'Rapports envoy\u00e9s',sub:`${envoyes.length} rapport(s)`}),
        h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
          h('thead',null,h('tr',null,['Match','Score','Date envoi','Statut feuille'].map(x=>h('th',{key:x,style:ST.th},x)))),
          h('tbody',null,...envoyes.map(r=>{const m=matchs.find(x=>x.id===r.matchId);return h('tr',{key:r.id},
            h('td',{style:{...ST.td,fontWeight:600}},m?`${m.dom} \u2014 ${m.vis}`:'\u2014'),
            h('td',{style:{...ST.td,textAlign:'center',fontWeight:700}},`${r.scoreDom} \u2013 ${r.scoreVis}`),
            h('td',{style:ST.td},r.dateEnvoi),
            h('td',{style:ST.td},feuilleIds.has(r.matchId)?h(Badge,{tone:'green'},'Feuille valid\u00e9e'):h(Badge,{tone:'blue'},'En attente compta')));})))))));
}

function RefHistoriqueTab({arbitre,feuilles,presences,matchs,sancApp,taux}){
  const nm=refFullName(arbitre);
  const rows=useMemo(()=>{
    return feuilles.filter(f=>f.statut==='Valid\u00e9e').map(f=>{
      const p=presences.find(pr=>pr.feuilleId===f.id&&pr.nomArbitre===nm);
      const m=matchs.find(x=>x.id===f.matchId);
      const pay=netPresence(p,f,sancApp,taux);
      return{...f,role:p?.roleArbitre||roleOnMatch(m||{},nm)||'\u2014',present:!!p?.present,pay,m};
    }).filter(r=>r.present).sort((a,b)=>String(b.dateMatch||'').localeCompare(String(a.dateMatch||'')));
  },[feuilles,presences,matchs,sancApp,taux,nm]);
  const table=rows.length===0?h('div',{style:ST.empty},'Aucun match valid\u00e9 pour le moment.'):
    h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
      h('thead',null,h('tr',null,['Match','Date','Comp\u00e9tition','R\u00f4le','Score','Net'].map(x=>h('th',{key:x,style:ST.th},x)))),
      h('tbody',null,...rows.map(f=>h('tr',{key:f.id},
        h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},`${f.domicile} \u2014 ${f.visiteur}`),
        h('td',{style:ST.td},f.dateMatch||'\u2014'),
        h('td',{style:ST.td},f.competition?h(Badge,{tone:'violet'},f.competition):'\u2014'),
        h('td',{style:ST.td},h(Badge,{tone:f.role==='Central'?'green':f.role==='Assistant'?'blue':'violet'},f.role)),
        h('td',{style:{...ST.td,textAlign:'center'}},f.scoreDom!==''&&f.scoreVis!==''?`${f.scoreDom} \u2013 ${f.scoreVis}`:'\u2014'),
        h('td',{style:{...ST.td,textAlign:'right',fontWeight:700,color:C.greenD}},fdj(f.pay.net)))))));
  return h(RefGate,{arbitre},h(Section,null,h(Card,null,
    h(CardHead,{title:'Historique des matchs',sub:`${rows.length} feuille(s) valid\u00e9e(s)`}),table)));
}

function RefPaiementsTab({arbitre,feuilles,presences,sancApp,taux,saisons}){
  const nm=refFullName(arbitre);
  const[fS,sFS]=useState('');
  const rows=useMemo(()=>{
    return feuilles.filter(f=>{
      if(f.statut!=='Valid\u00e9e')return false;
      if(fS&&f.saisonId!==parseInt(fS))return false;
      const p=presences.find(pr=>pr.feuilleId===f.id&&pr.nomArbitre===nm&&pr.present);
      return!!p;
    }).map(f=>{
      const p=presences.find(pr=>pr.feuilleId===f.id&&pr.nomArbitre===nm);
      const pay=netPresence(p,f,sancApp,taux);
      return{...f,role:p?.roleArbitre,pay};
    }).sort((a,b)=>String(b.dateMatch||'').localeCompare(String(a.dateMatch||'')));
  },[feuilles,presences,sancApp,taux,nm,fS]);
  const tot=rows.reduce((a,r)=>({brut:a.brut+r.pay.brut,ded:a.ded+r.pay.ded,net:a.net+r.pay.net}),{brut:0,ded:0,net:0});
  const stats=h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:0,borderTop:`1px solid ${T.line}`,borderBottom:`1px solid ${T.line}`,marginBottom:32}},
    [{l:'Brut total',v:fdj(tot.brut)},{l:'D\u00e9ductions',v:tot.ded>0?`\u2212 ${fdj(tot.ded)}`:'\u2014'},{l:'Net \u00e0 percevoir',v:fdj(tot.net)}]
      .map((s,i)=>h('div',{key:s.l,style:{padding:'18px 16px',borderRight:i<2?`1px solid ${T.hair}`:'none'}},
        h('div',{className:'disp',style:{fontSize:i===2?26:22,fontWeight:700,color:i===2?T.greenInk:T.ink,lineHeight:1}},s.v),
        h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,marginTop:6,letterSpacing:'0.08em',textTransform:'uppercase'}},s.l))));
  const table=rows.length===0?h('div',{style:ST.empty},'Aucun paiement enregistr\u00e9.'):
    h('div',{style:{overflowX:'auto'}},h('table',{style:ST.table},
      h('thead',null,h('tr',null,['Match','Date','Division','R\u00f4le','Brut','D\u00e9ductions','Net'].map(x=>h('th',{key:x,style:ST.th},x)))),
      h('tbody',null,...rows.map(f=>h('tr',{key:f.id},
        h('td',{style:{...ST.td,fontWeight:600,color:C.ink}},`${f.domicile} \u2014 ${f.visiteur}`),
        h('td',{style:ST.td},f.dateMatch||'\u2014'),
        h('td',{style:ST.td},f.divisionRetenue?h(Badge,{tone:'blue'},f.divisionRetenue):'\u2014'),
        h('td',{style:ST.td},h(Badge,{tone:f.role==='Central'?'green':f.role==='Assistant'?'blue':'violet'},f.role)),
        h('td',{style:{...ST.td,textAlign:'right'}},fdj(f.pay.brut)),
        h('td',{style:{...ST.td,textAlign:'right',color:f.pay.ded>0?C.redD:C.ink4}},f.pay.ded>0?`\u2212 ${fdj(f.pay.ded)}`:'\u2014'),
        h('td',{style:{...ST.td,textAlign:'right',fontWeight:700,color:C.greenD}},fdj(f.pay.net)))),
      h('tfoot',null,h('tr',null,
        h('td',{colSpan:4,style:{...ST.td,fontWeight:700,borderTop:`2px solid ${T.line}`}},'TOTAL'),
        h('td',{style:{...ST.td,textAlign:'right',fontWeight:700,borderTop:`2px solid ${T.line}`}},fdj(tot.brut)),
        h('td',{style:{...ST.td,textAlign:'right',fontWeight:700,color:C.redD,borderTop:`2px solid ${T.line}`}},tot.ded>0?`\u2212 ${fdj(tot.ded)}`:'\u2014'),
        h('td',{style:{...ST.td,textAlign:'right',fontWeight:800,color:C.greenD,borderTop:`2px solid ${T.line}`}},fdj(tot.net)))))));
  return h(RefGate,{arbitre},h(Section,null,
    h(Card,null,h(CardHead,{title:'Filtres'}),
      h('div',{style:ST.body},h(Field,{label:'Saison'},h(Sel,{value:fS,onChange:e=>sFS(e.target.value)},
        h('option',{value:''},'Toutes'),...saisons.map(s=>h('option',{key:s.id,value:s.id},s.libelle)))))),
    stats,
    h(Card,null,h(CardHead,{title:'D\u00e9tail des paiements',sub:`${rows.length} match(s) valid\u00e9(s)`}),table)));
}

function RefProfilTab({arbitre,matchs,feuilles,presences,sancApp,taux}){
  if(!arbitre)return h(RefGate,{arbitre:null});
  const nm=refFullName(arbitre);
  const designes=matchs.filter(m=>m.submitted&&roleOnMatch(m,nm)).length;
  const valides=feuilles.filter(f=>{
    if(f.statut!=='Valid\u00e9e')return false;
    return presences.some(p=>p.feuilleId===f.id&&p.nomArbitre===nm&&p.present);
  }).length;
  const netTotal=feuilles.filter(f=>f.statut==='Valid\u00e9e').reduce((acc,f)=>{
    const p=presences.find(pr=>pr.feuilleId===f.id&&pr.nomArbitre===nm&&pr.present);
    if(!p)return acc;
    return acc+netPresence(p,f,sancApp,taux).net;
  },0);

  const initials=`${arbitre.prenom?.[0]||''}${arbitre.nom?.[0]||''}`.toUpperCase();

  const RowItem=({icon,label,value})=>h('div',{style:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'16px 0',
    borderBottom:`1px solid ${T.hair}`
  }},
    h('div',{style:{display:'flex',alignItems:'center',gap:12}},
      h('div',{style:{color:T.ink3,display:'flex',alignItems:'center'}},icon),
      h('div',{className:'narrow',style:{fontSize:13,color:T.ink2}},label)
    ),
    h('div',{style:{fontSize:14,fontWeight:600,color:T.ink}},value||'\u2014')
  );

  return h(Section,null,
    /* Header Card */
    h('div',{style:{
      background:`linear-gradient(135deg, ${T.cream}, ${T.paper})`,
      border:`2px solid ${T.line}`,
      borderRadius:12,
      padding:24,
      display:'flex',
      alignItems:'center',
      gap:20,
      flexWrap:'wrap',
      boxShadow:'0 4px 15px rgba(21,19,14,0.04)'
    }},
      h('div',{style:{
        width:72,
        height:72,
        borderRadius:'50%',
        background:`linear-gradient(135deg, ${T.green}, ${T.greenInk})`,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'#fff',
        fontSize:24,
        fontWeight:700,
        boxShadow:'0 4px 10px rgba(0,0,0,0.1)'
      }},initials),
      h('div',{style:{display:'flex',flexDirection:'column',gap:4}},
        h('div',{className:'disp',style:{fontSize:24,fontWeight:700,color:T.ink}},nm),
        h('div',{style:{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}},
          h(Badge,{tone:'green'},`Licence: ${arbitre.licence||'\u2014'}`),
          h('span',{className:'narrow',style:{fontSize:12,color:T.ink3,fontWeight:600}},`${arbitre.type||'Arbitre'} \u2022 ${arbitre.niveau||'\u2014'}`)
        )
      )
    ),

    /* Grid cards stats */
    h('div',{className:'grid-mobile-1',style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16}},
      /* Card 1 */
      h('div',{style:{background:T.paper,border:`1px solid ${T.line}`,borderRadius:12,padding:20,boxShadow:'0 4px 12px rgba(0,0,0,0.02)'}},
        h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}},
          h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em'}},'D\u00e9signations'),
          h('div',{style:{color:T.greenInk}},
            h('svg',{width:22,height:22,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},
              h('rect',{x:3,y:4,width:18,height:18,rx:2,ry:2}),
              h('line',{x1:16,y1:2,x2:16,y2:6}),
              h('line',{x1:8,y1:2,x2:8,y2:6}),
              h('line',{x1:3,y1:10,x2:21,y2:10})))
        ),
        h('div',{className:'disp',style:{fontSize:32,fontWeight:700,color:T.ink}},designes)
      ),
      /* Card 2 */
      h('div',{style:{background:T.paper,border:`1px solid ${T.line}`,borderRadius:12,padding:20,boxShadow:'0 4px 12px rgba(0,0,0,0.02)'}},
        h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}},
          h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em'}},'Matchs valid\u00e9s'),
          h('div',{style:{color:T.green}},
            h('svg',{width:22,height:22,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},
              h('path',{d:'M22 11.08V12a10 10 0 1 1-5.93-9.14'}),
              h('polyline',{points:'22 4 12 14.01 9 11.01'})))
        ),
        h('div',{className:'disp',style:{fontSize:32,fontWeight:700,color:T.ink}},valides)
      ),
      /* Card 3 */
      h('div',{style:{background:T.paper,border:`1px solid ${T.line}`,borderRadius:12,padding:20,boxShadow:'0 4px 12px rgba(0,0,0,0.02)'}},
        h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}},
          h('div',{className:'narrow',style:{fontSize:11,color:T.ink3,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em'}},'Net cumul\u00e9'),
          h('div',{style:{color:T.greenInk}},
            h('svg',{width:22,height:22,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},
              h('rect',{x:2,y:4,width:20,height:16,rx:2}),
              h('line',{x1:12,y1:20,x2:12,y2:4}),
              h('path',{d:'M12 10a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5z'}),
              h('path',{d:'M12 19a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5z'})))
        ),
        h('div',{className:'disp',style:{fontSize:24,fontWeight:700,color:T.greenInk,lineHeight:'38px'}},fdj(netTotal))
      )
    ),

    /* Personal info Settings List */
    h(Card,null,
      h(CardHead,{title:'Coordonn\u00e9es et informations'}),
      h('div',{style:{...ST.body,paddingTop:8}},
        RowItem({
          icon:h('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},h('path',{d:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'})),
          label:'N\u00b0 de Licence',
          value:arbitre.licence
        }),
        RowItem({
          icon:h('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},h('circle',{cx:12,cy:8,r:7}),h('polyline',{points:'8.21 13.89 7 23 12 20 17 23 15.79 13.88'})),
          label:'Grade / Niveau',
          value:arbitre.niveau
        }),
        RowItem({
          icon:h('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},h('path',{d:'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'}),h('circle',{cx:12,cy:7,r:4})),
          label:'Type d\u2019arbitrage',
          value:arbitre.type
        }),
        RowItem({
          icon:h('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},h('path',{d:'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'})),
          label:'T\u00e9l\u00e9phone',
          value:arbitre.telephone
        }),
        RowItem({
          icon:h('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},h('path',{d:'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'}),h('polyline',{points:'22,6 12,13 2,6'})),
          label:'Adresse Email',
          value:arbitre.email
        }),
        RowItem({
          icon:h('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},h('circle',{cx:12,cy:12,r:10}),h('line',{x1:12,y1:8,x2:12,y2:16}),h('line',{x1:8,y1:12,x2:16,y2:12})),
          label:'Statut administratif',
          value:arbitre.statut
        })
      )
    )
  );
}

function RefView({sub,props}){
  const{arbitres,matchs,feuilles,presences,sancApp,taux,saisons,refId,setRefId,refConfirmations,setRefConfirmations,rapports,setRapports,actS}=props;
  const arbitre=arbitres.find(a=>a.id===refId)||null;
  if(sub==='identite')return h(RefIdentiteTab,{arbitres,refId,setRefId});
  if(sub==='designations')return h(RefDesignationsTab,{arbitre,matchs,feuilles,refConfirmations,setRefConfirmations,actS});
  if(sub==='rapports')return h(RefRapportsTab,{arbitre,matchs,feuilles,rapports,setRapports,actS,saisons});
  if(sub==='historique')return h(RefHistoriqueTab,{arbitre,feuilles,presences,matchs,sancApp,taux});
  if(sub==='paiements')return h(RefPaiementsTab,{arbitre,feuilles,presences,sancApp,taux,saisons});
  if(sub==='profil')return h(RefProfilTab,{arbitre,matchs,feuilles,presences,sancApp,taux});
  return null;
}

/* ════════════════════════════════════════════
   LOGO (data URI intégré)
════════════════════════════════════════════ */
const LOGO_SRC="data:image/png;base64,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G+uMvMIcpaDQq63bWY2aOl+/jOzizwF8NnLo8D+yZbcHfFGkZqUrgWhIsMro3asAWel2+NqP49jRvWhuakBpr1SaMXWaCNZVGsGOtiwHcDc07fIlcUNSEW+G8Z/JCdylZVmLACxobmx2vP/ue3r5gYMElicbrNLY2GBFImFxzjnnlAHgM888k6urqx3t7e2FzEz3339/ysMPP4za2lqYpuk/aR9pJyIQEfx+Pzc3N//DbyPe+FEAcXZjxCcLQURPAZhIRGuZmXbs2CEB8BNfvOyYdeM5kS++/1Q4prhtfUb0IcMIoa2uBlZnABl2O1KdGqI+Hxra62F5FGAkRJPRgu/W/ehYom9N2rf/J+3Nd/5q+/rb1QAgMtKyqCNicDAaU7PzCu3DBg4iAH4HUfZJLi4BmKeqtnsAPP/dtytuePrRhWan3y9zswtkRlq6lZWbM4yZ8xORyt1EdEckEvk+JydHVFRURNrb248krrmLAv7/PeGTylmY+S7DMNquvvpqPuOMM15j5jycxDXPzL2YeTAz92HmfczMCxZcaSHBdjxgQH99547NHDUi7yc+X2RZ1npm5h2bdjDilN9m/zF9uG//TAaI+/YulLt37pI+f8T6+3dbrayZV/GYB17ktxpi/OddNfzougP8xPff8YV/vIgnXdyTr7jnXH7qnU94Q3mUNx4yeMzs20LdJ59hPPnFV+ZLS5deAgDL4zAi5//PdbtOuu6/MbN588236AD8iNe3SVXV2O32shCCbTaN582bx/v27Tf37NlzR+J7VzJz8/PPP78eQK3dbpfXX389P/300zck/k/MfDsz88iRIy2bzSbffvttbm1t7aqV01pbW70cT9z/hyvyye8z84PLjvzYAQdM9IE8femZfO+u2/jKDybytDtcfOafkvm0p3N57Iv5PPLNXjxm2Xgu+34ap73aXyo35fIpD83mo9GmnfUtDRtHnjKKAXCKI4lHDRzKNlU1snJyre83buXWztBqjleQdxEa2SzL+pthGHo40G489/TjRlJSsgRgDBsymtf8uImD/hgnJMDMpySA2o533nnni82bN/PLL78ce/bZZ88A4hSKXcRLvxf5LVe4E3sSKeVYVVXTRo4ciRUrVqwlovqJEycqEydOVACAiI4kZq5DPp/vUgBvPvLIY+asWWfYAYT27TsQfOKJp/HO229ddMmVl5wH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";

/* ════════════════════════════════════════════
   ROUTAGE
════════════════════════════════════════════ */
function AssignView({sub,props}){
  const{clubs,setClubs,arbitres,setArbitres,competitions,setCompetitions,
    matchs,setMatchs,saisons,setSaisons,taux,setTaux,divisions,setDivisions}=props;
  if(sub==='clubs')return h(ClubsTab,{clubs,setClubs});
  if(sub==='arbitres')return h(ArbitresTab,{arbitres,setArbitres});
  if(sub==='saisons')return h(SaisonsTab,{saisons,setSaisons,taux,setTaux,divisions,setDivisions,competitions,setCompetitions});
  if(sub==='divisions')return h(DivisionsTab,{divisions,setDivisions,saisons,clubs,arbitres,taux,setTaux});
  if(sub==='competitions')return h(CompetitionsTab,{competitions,setCompetitions,saisons,divisions});
  if(sub==='matchs')return h(MatchsTab,{matchs,setMatchs,clubs,competitions,divisions,actS:saisons.find(s=>s.statut==='Active')});
  if(sub==='assign')return h(AssignTab,{matchs,setMatchs,arbitres,setArbitres,actS:saisons.find(s=>s.statut==='Active'),competitions,divisions,clubs});
  return null;
}
function ComptaView({sub,props}){
  const{saisons,setSaisons,taux,setTaux,sanctions,setSanctions,feuilles,setFeuilles,
    presences,setPresences,sancApp,setSancApp,competitions,matchs,clubs,divisions,rapports}=props;
  const actS=saisons.find(s=>s.statut==='Active');
  if(sub==='taux')return h(CTaux,{saisons,setSaisons,taux,setTaux});
  if(sub==='sanctions')return h(CSanctions,{sanctions,setSanctions});
  if(sub==='feuilles')return h(CFeuilles,{feuilles,setFeuilles,presences,setPresences,sancApp,setSancApp,saisons,taux,sanctions,actS,competitions,matchs,clubs,divisions,rapports});
  if(sub==='rapports')return h(CRapports,{rapports,matchs,feuilles,actS});
  if(sub==='recap')return h(CRecap,{feuilles,presences,sancApp,taux,saisons});
  return null;
}

const NAV={
  assign:{label:'Assignation',code:'4321',num:'01',
    desc:'R\u00e9f\u00e9rentiels, structure des saisons et d\u00e9signation des arbitres.',
    items:[
      {id:'clubs',label:'Clubs',k:'A'},{id:'arbitres',label:'Arbitres',k:'B'},
      {id:'saisons',label:'Saisons',k:'C'},{id:'divisions',label:'Divisions',k:'D'},
      {id:'competitions',label:'Comp\u00e9titions',k:'E'},{id:'matchs',label:'Matchs',k:'F'},
      {id:'assign',label:'Assignation',k:'G'}]},
  compta:{label:'Comptabilit\u00e9',code:'1234',num:'02',
    desc:'Taux, sanctions, feuilles de match et suivi des paiements.',
    items:[
      {id:'taux',label:'Saisons et taux',k:'A'},{id:'sanctions',label:'Sanctions',k:'B'},
      {id:'feuilles',label:'Feuilles de match',k:'C'},{id:'rapports',label:'Rapports arbitres',k:'D'},
      {id:'recap',label:'R\u00e9capitulatifs',k:'E'}]},
  ref:{label:'Arbitre',code:'5678',num:'03',
    desc:'Espace personnel : d\u00e9signations, rapports de match, historique et paiements.',
    items:[
      {id:'identite',label:'Mon compte',k:'A'},{id:'designations',label:'Mes d\u00e9signations',k:'B'},
      {id:'rapports',label:'Rapport de match',k:'C'},{id:'historique',label:'Historique',k:'D'},
      {id:'paiements',label:'Mes paiements',k:'E'},{id:'profil',label:'Mon profil',k:'F'}]},
};

function App(){
  const[user,setUser]=useLS('pgi3:currentUser',null);
  const[mod,sMod]=useState('assign');
  const[sub,sSub]=useState('clubs');
  const[menuOpen,sMenuOpen]=useState(false);
  const { installable, installed, promptInstall } = usePWAInstall();
  const[installHv,sInstallHv]=useState(false);
  const unlocked={
    assign:user?.role==='assign',
    compta:user?.role==='compta',
    ref:user?.role==='ref'
  };
  const handleLoginSuccess=(usr)=>{
    setUser(usr);
    sMod(usr.role);
    if(usr.role==='ref'){
      sSub('profil');
    }else{
      sSub(NAV[usr.role].items[0].id);
    }
    if(usr.refId) setRefId(usr.refId);
  };
  const handleLogout=()=>{
    setUser(null);
    setRefId(null);
    sMod('assign');
    sSub('clubs');
  };
  const[clubs,setClubs]=useLS('pgi3:clubs',[]);
  const[arbitres,setArbitres]=useLS('pgi3:arbitres',[]);
  const[competitions,setCompetitions]=useLS('pgi3:competitions',[]);
  const[matchs,setMatchs]=useLS('pgi3:matchs',[]);
  const[saisons,setSaisons]=useLS('pgi3:saisons',[]);
  const[divisions,setDivisions]=useLS('pgi3:divisions',[]);
  const[taux,setTaux]=useLS('pgi3:taux',[]);
  const[sanctions,setSanctions]=useLS('pgi3:sanctions',[]);
  const[feuilles,setFeuilles]=useLS('pgi3:feuilles',[]);
  const[presences,setPresences]=useLS('pgi3:presences',[]);
  const[sancApp,setSancApp]=useLS('pgi3:sancapp',[]);
  const[rapports,setRapports]=useLS('pgi3:rapports',[]);
  const[refId,setRefId]=useLS('pgi3:refId',null);
  const[refConfirmations,setRefConfirmations]=useLS('pgi3:refConfirm',[]);

  const assignProps={clubs,setClubs,arbitres,setArbitres,competitions,setCompetitions,matchs,setMatchs,saisons,setSaisons,taux,setTaux,divisions,setDivisions};
  const comptaProps={saisons,setSaisons,taux,setTaux,sanctions,setSanctions,feuilles,setFeuilles,presences,setPresences,sancApp,setSancApp,competitions,matchs,clubs,divisions,rapports};
  const actS=saisons.find(s=>s.statut==='Active');
  const refProps={arbitres,matchs,feuilles,presences,sancApp,taux,saisons,refId:user?.refId||refId,setRefId:user?.refId?()=>{}:setRefId,refConfirmations,setRefConfirmations,rapports,setRapports,actS};
  const loadDemo=()=>{
    const d=applyDemoData();
    setClubs(d.clubs);setArbitres(d.arbitres);setSaisons(d.saisons);setDivisions(d.divisions);
    setCompetitions(d.competitions);setTaux(d.taux);setSanctions(d.sanctions);setMatchs(d.matchs);
    setFeuilles(d.feuilles);setPresences(d.presences);setSancApp(d.sancApp);
    setRapports(d.rapports);setRefId(d.refId);setRefConfirmations(d.refConfirmations);
  };
  const cur=NAV[mod];const isUnlocked=unlocked[mod];
  const switchMod=m=>{sMod(m);sSub(NAV[m].items[0].id);};

  const NavLine=({it,onClick})=>{
    const on=sub===it.id;const[hv,sHv]=useState(false);
    return h('button',{onClick:()=>{sSub(it.id);onClick&&onClick();},onMouseEnter:()=>sHv(true),onMouseLeave:()=>sHv(false),
      style:{display:'flex',alignItems:'baseline',gap:12,width:'100%',textAlign:'left',
        background:'transparent',border:'none',borderBottom:`1px solid ${on?T.line:'transparent'}`,
        padding:'10px 0',cursor:'pointer',transition:'all .12s'}},
      h('span',{className:'narrow',style:{fontSize:11,fontWeight:700,letterSpacing:'0.1em',
        color:on?T.green:T.ink4,width:14,flexShrink:0}},it.k),
      h('span',{className:on?'disp':'',style:{fontSize:on?19:15.5,fontWeight:on?600:500,
        color:on?T.ink:(hv?T.ink:T.ink3),
        fontFamily:on?"'Oswald',sans-serif":"'Archivo',sans-serif",
        transition:'all .12s',lineHeight:1.1}},it.label));
  };

  const sidebar=h('div',{className:`no-print sidebar ${menuOpen ? 'open' : ''}`,style:{width:264,flexShrink:0,background:T.cream,
    borderRight:`1px solid ${T.line}`,height:'100vh',position:'sticky',top:0,
    display:'flex',flexDirection:'column',padding:'26px 24px 20px'}},
    /* Logo + marque */
    h('div',{style:{display:'flex',alignItems:'center',gap:13,marginBottom:26}},
      h('img',{src:LOGO_SRC,alt:'FDF',style:{width:42,height:'auto',flexShrink:0}}),
      h('div',null,
        h('div',{className:'disp',style:{fontSize:23,fontWeight:700,color:T.ink,lineHeight:0.9}},
          'PGI',h('span',{style:{color:T.green}},'.'),'FDF'),
        h('div',{className:'narrow',style:{fontSize:9.5,color:T.green,letterSpacing:'0.18em',
          marginTop:3,fontWeight:600}},'VERSION 0.3'))),
    h('div',{className:'narrow',style:{fontSize:10,color:T.ink3,letterSpacing:'0.14em',
      textTransform:'uppercase',marginBottom:22,lineHeight:1.6,paddingBottom:18,
      borderBottom:`1px solid ${T.line}`}},'Assignation et suivi de paiement'),
    /* Modules */
    h('div',{style:{marginBottom:24}},
      ...Object.entries(NAV).filter(([k])=>k===user?.role).map(([k,v])=>{
        const on=mod===k;
        return h('button',{key:k,onClick:()=>{switchMod(k);sMenuOpen(false);},
          style:{display:'flex',alignItems:'baseline',gap:12,width:'100%',textAlign:'left',
            background:'transparent',border:'none',padding:'8px 0',cursor:'pointer'}},
          h('span',{className:'narrow',style:{fontSize:12,fontWeight:700,letterSpacing:'0.2em',
            color:on?T.green:T.ink4,width:20,flexShrink:0}},v.num),
          h('span',{className:'disp',style:{fontSize:16,fontWeight:on?700:500,
            color:on?T.ink:T.ink3,fontFamily:"'Oswald',sans-serif"}},
            v.label));
      })),
    h('div',{style:{borderTop:`1px solid ${T.line}`,marginBottom:16}}),
    h('div',{style:{marginBottom:16}},
      h(Btn,{variant:'soft',size:'sm',onClick:handleLogout,style:{width:'100%',color:T.red,borderColor:T.red}},'Déconnexion')),
    h('div',{style:{flex:1,overflowY:'auto'}},
      h('div',null,
        h('div',{className:'narrow',style:{fontSize:10,color:T.ink4,letterSpacing:'0.18em',
          textTransform:'uppercase',marginBottom:4}},'Sections'),
        ...cur.items.filter(it=>!(it.id==='identite'&&user?.refId)).map(it=>h(NavLine,{key:it.id,it,onClick:()=>sMenuOpen(false)})))),
    h('div',{className:'narrow',style:{borderTop:`1px solid ${T.line}`,paddingTop:14,
      fontSize:10,color:T.ink4,letterSpacing:'0.08em',lineHeight:1.7}},
      'ANAS MOUD',h('br'),'PROJET FDF \u2014 V0.3',
      /* ── Bouton Installer l'application ── */
      !installed && installable && h('div',{style:{marginTop:10}},
        h('button',{
          onClick:promptInstall,
          onMouseEnter:()=>sInstallHv(true),
          onMouseLeave:()=>sInstallHv(false),
          style:{
            display:'flex',alignItems:'center',justifyContent:'center',gap:7,width:'100%',
            background:installHv?T.green:'transparent',
            border:`1.5px solid ${T.green}`,
            color:installHv?T.cream:T.green,
            fontSize:10.5,padding:'8px 10px',cursor:'pointer',
            letterSpacing:'0.12em',textTransform:'uppercase',
            fontFamily:"'Archivo',sans-serif",fontWeight:700,
            transition:'all .15s',borderRadius:0,
          }},
          /* Download arrow icon */
          h('svg',{xmlns:'http://www.w3.org/2000/svg',width:13,height:13,viewBox:'0 0 24 24',
            fill:'none',stroke:'currentColor',strokeWidth:2.2,strokeLinecap:'round',strokeLinejoin:'round'},
            h('path',{d:'M12 3v13'}),
            h('path',{d:'M5 14l7 7 7-7'}),
            h('path',{d:'M3 21h18'})),
          'Installer l\u2019app')),
      installed && h('div',{style:{marginTop:10,
        display:'flex',alignItems:'center',gap:6,
        color:T.green,fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',
        fontFamily:"'Archivo Narrow',sans-serif",fontWeight:600}},
        h('svg',{xmlns:'http://www.w3.org/2000/svg',width:12,height:12,viewBox:'0 0 24 24',
          fill:'none',stroke:'currentColor',strokeWidth:2.5,strokeLinecap:'round',strokeLinejoin:'round'},
          h('polyline',{points:'20 6 9 17 4 12'})),
        'Application install\u00e9e'),
      h('div',{style:{marginTop:10}},
        h('button',{onClick:loadDemo,style:{background:'transparent',border:`1px solid ${T.hair}`,
          color:T.ink3,fontSize:10,padding:'6px 10px',cursor:'pointer',letterSpacing:'0.1em',
          textTransform:'uppercase',fontFamily:"'Archivo Narrow',sans-serif",width:'100%'}},
          'Recharger donn\u00e9es d\u00e9mo'))));

  const curItem=cur.items.find(i=>i.id===sub)||null;
  const header=h('div',{style:{display:'flex',alignItems:'baseline',justifyContent:'space-between',
    gap:20,marginBottom:34,flexWrap:'wrap'}},
    h('span',{className:'narrow disp',style:{fontSize:13,color:T.ink3,letterSpacing:'0.16em'}},
      cur.num+' / '+cur.label),
    actS
      ? h('div',{className:'narrow',style:{fontSize:11.5,letterSpacing:'0.12em',textTransform:'uppercase',
          color:T.greenInk,borderLeft:`2px solid ${T.green}`,paddingLeft:10}},'Saison active \u2014 '+actS.libelle)
      : h('div',{className:'narrow',style:{fontSize:11.5,letterSpacing:'0.12em',textTransform:'uppercase',
          color:T.ink4,borderLeft:`2px solid ${T.hair}`,paddingLeft:10}},'Aucune saison active'));

  const content=h('div',{style:{flex:1,minWidth:0,minHeight:'100vh',background:T.cream}},
    h('div',{className:'content-wrapper',style:{maxWidth:1080}},
      h('div',null,header,
        mod==='assign'?h(AssignView,{sub,props:assignProps})
        :mod==='compta'?h(ComptaView,{sub,props:comptaProps})
        :h(RefView,{sub,props:refProps}))));

  if(!user){
    return h(LoginPortal,{onSuccess:handleLoginSuccess,arbitres});
  }

  return h('div',{style:{display:'flex',minHeight:'100vh',background:T.cream},className:'app-container'},
    menuOpen && h('div',{className:'sidebar-backdrop',onClick:()=>sMenuOpen(false)}),
    sidebar,
    h('div',{style:{flex:1,display:'flex',flexDirection:'column'}},
      h('div',{className:'mobile-header'},
        h('div',{style:{display:'flex',alignItems:'center',gap:13}},
          h('img',{src:LOGO_SRC,alt:'FDF',style:{width:32,height:'auto'}}),
          h('div',{className:'disp',style:{fontSize:18,fontWeight:700,color:T.ink}},'PGI.FDF')
        ),
        h(Btn,{variant:'soft',size:'sm',onClick:()=>sMenuOpen(true)},'Menu')
      ),
      content
    )
  );
}
export default App;
