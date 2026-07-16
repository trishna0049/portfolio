type SkillBarProps = {
  name: string;
  level?: number;
  description?: string;
  className?: string;
};

export function SkillBar({ name, description, className }: SkillBarProps) {
  return (
    <div className={className}>
      <span className="text-sm font-medium text-foreground">{name}</span>
      {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
    </div>
  );
}
