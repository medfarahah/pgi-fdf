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
const LOGO_SRC="/logo.png";

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
      h(Btn,{variant:'soft',size:'sm',onClick:handleLogout,style:{width:'100%',color:T.red,borderColor:T.red}},'D\u00e9connexion')),
    /* ── PWA Install — visible for every user type ── */
    (installable&&!installed)&&h('div',{style:{marginBottom:14}},
      h('button',{
        onClick:promptInstall,
        onMouseEnter:()=>sInstallHv(true),
        onMouseLeave:()=>sInstallHv(false),
        style:{
          display:'flex',alignItems:'center',justifyContent:'center',gap:7,width:'100%',
          background:installHv?T.green:'transparent',
          border:`1.5px solid ${T.green}`,
          color:installHv?T.cream:T.green,
          fontSize:10.5,padding:'9px 10px',cursor:'pointer',
          letterSpacing:'0.12em',textTransform:'uppercase',
          fontFamily:"'Archivo',sans-serif",fontWeight:700,
          transition:'all .15s',borderRadius:0,
        }},
        h('svg',{xmlns:'http://www.w3.org/2000/svg',width:13,height:13,viewBox:'0 0 24 24',
          fill:'none',stroke:'currentColor',strokeWidth:2.2,
          strokeLinecap:'round',strokeLinejoin:'round'},
          h('path',{d:'M12 3v13'}),
          h('path',{d:'M5 14l7 7 7-7'}),
          h('path',{d:'M3 21h18'})),
        'Installer l\u2019app')),
    installed&&h('div',{style:{marginBottom:14,
      display:'flex',alignItems:'center',justifyContent:'center',gap:6,
      background:T.greenL,border:`1px solid ${T.green}`,padding:'8px 10px',
      color:T.greenInk,fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',
      fontFamily:"'Archivo Narrow',sans-serif",fontWeight:700}},
      h('svg',{xmlns:'http://www.w3.org/2000/svg',width:12,height:12,viewBox:'0 0 24 24',
        fill:'none',stroke:'currentColor',strokeWidth:2.5,
        strokeLinecap:'round',strokeLinejoin:'round'},
        h('polyline',{points:'20 6 9 17 4 12'})),
      'Application install\u00e9e'),
    h('div',{style:{flex:1,overflowY:'auto'}},
      h('div',null,
        h('div',{className:'narrow',style:{fontSize:10,color:T.ink4,letterSpacing:'0.18em',
          textTransform:'uppercase',marginBottom:4}},'Sections'),
        ...cur.items.filter(it=>!(it.id==='identite'&&user?.refId)).map(it=>h(NavLine,{key:it.id,it,onClick:()=>sMenuOpen(false)})))),
    h('div',{className:'narrow',style:{borderTop:`1px solid ${T.line}`,paddingTop:14,
      fontSize:10,color:T.ink4,letterSpacing:'0.08em',lineHeight:1.7}},
      'ANAS MOUD',h('br'),'PROJET FDF \u2014 V0.3'));


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
        h('div',{style:{display:'flex',alignItems:'center',gap:8}},
          /* PWA install button — mobile */
          installable && !installed && h('button',{
            onClick:promptInstall,
            title:'Installer l\'application',
            style:{
              display:'flex',alignItems:'center',gap:5,
              background:'transparent',border:`1.5px solid ${T.green}`,
              color:T.green,fontSize:10,padding:'6px 10px',cursor:'pointer',
              letterSpacing:'0.1em',textTransform:'uppercase',
              fontFamily:"'Archivo',sans-serif",fontWeight:700,
              borderRadius:0,transition:'all .15s',whiteSpace:'nowrap',
            }},
            h('svg',{xmlns:'http://www.w3.org/2000/svg',width:12,height:12,viewBox:'0 0 24 24',
              fill:'none',stroke:'currentColor',strokeWidth:2.2,strokeLinecap:'round',strokeLinejoin:'round'},
              h('path',{d:'M12 3v13'}),
              h('path',{d:'M5 14l7 7 7-7'}),
              h('path',{d:'M3 21h18'})),
            'Installer'),
          installed && h('div',{
            title:'Application installée',
            style:{display:'flex',alignItems:'center',gap:4,color:T.green,
              fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',
              fontFamily:"'Archivo Narrow',sans-serif"}},
            h('svg',{xmlns:'http://www.w3.org/2000/svg',width:12,height:12,viewBox:'0 0 24 24',
              fill:'none',stroke:'currentColor',strokeWidth:2.5,strokeLinecap:'round',strokeLinejoin:'round'},
              h('polyline',{points:'20 6 9 17 4 12'})),
            'Installé'),
          h(Btn,{variant:'soft',size:'sm',onClick:()=>sMenuOpen(true)},'Menu')
        )
      ),
      content
    )
  );
}
export default App;
