function toggle(elem)
{
    sec=elem.parentElement;
    if(sec.style.width!='100%') sec.style.width='100%'; else sec.style.width='auto';
    collapse=sec.getElementsByClassName("collapsible-content")[0];
    if(collapse.style.height!='auto') collapse.style.height='auto'; else collapse.style.height='0px';
}