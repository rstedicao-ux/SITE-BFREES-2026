function Botao() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[347px]" data-name="BOTÃO">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jaapokki_subtract:Regular',sans-serif] h-[31.624px] leading-[normal] left-1/2 not-italic text-[22.953px] text-black text-center top-[356px] w-[152px]">ORÇAMENTO</p>
      <div className="-translate-x-1/2 absolute border border-black border-solid h-[47px] left-1/2 rounded-[45px] top-[348px] w-[192px]" />
    </div>
  );
}

export default function FrameOrcamento() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[2px] size-full" data-name="Frame orçamento">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jaapokki:Regular',sans-serif] h-[197.235px] leading-[0] left-[calc(50%+0.37px)] not-italic text-[143.154px] text-black text-center top-[38px] w-[890.738px]">
        <span className="leading-[normal] text-[#24214d]">nada</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="leading-[normal] text-[#ea8100]">genérico</span>
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jaapokki_subtract:Regular',sans-serif] h-[197.235px] leading-[normal] left-1/2 not-italic text-[143.154px] text-black text-center top-[170.11px] w-[948px]">tudo autêntico</p>
      <Botao />
    </div>
  );
}