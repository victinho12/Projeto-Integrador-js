PGDMP  .    "                }            Projeto_integrador    16.9    16.9 #    6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            9           1262    16515    Projeto_integrador    DATABASE     �   CREATE DATABASE "Projeto_integrador" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
 $   DROP DATABASE "Projeto_integrador";
                postgres    false            �            1259    16526    cliente    TABLE     s   CREATE TABLE public.cliente (
    codcliente integer NOT NULL,
    nome text,
    email text,
    telefone text
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    16525    cliente_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cliente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.cliente_id_seq;
       public          postgres    false    217            :           0    0    cliente_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.cliente_id_seq OWNED BY public.cliente.codcliente;
          public          postgres    false    216            �            1259    16542    produtos    TABLE     �   CREATE TABLE public.produtos (
    codproduto integer NOT NULL,
    marca text,
    valor money,
    estoque integer,
    tipo text,
    cor text,
    nome text,
    "ativoInativo" text,
    tamanho text
);
    DROP TABLE public.produtos;
       public         heap    postgres    false            �            1259    16541    produtos_codproduto_seq    SEQUENCE     �   CREATE SEQUENCE public.produtos_codproduto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.produtos_codproduto_seq;
       public          postgres    false    220            ;           0    0    produtos_codproduto_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.produtos_codproduto_seq OWNED BY public.produtos.codproduto;
          public          postgres    false    219            �            1259    16534    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    nome text,
    email text,
    numero text,
    senha text,
    codusuario integer NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16555    usuarios_codUsuario_seq    SEQUENCE     �   CREATE SEQUENCE public."usuarios_codUsuario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."usuarios_codUsuario_seq";
       public          postgres    false    218            <           0    0    usuarios_codUsuario_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."usuarios_codUsuario_seq" OWNED BY public.usuarios.codusuario;
          public          postgres    false    221            �            1259    16517    vendas    TABLE     �   CREATE TABLE public.vendas (
    codcliente integer,
    codproduto integer,
    codusuario integer,
    status text,
    data date,
    valortotal money,
    codvenda integer NOT NULL
);
    DROP TABLE public.vendas;
       public         heap    postgres    false            �            1259    16587    vendas_codvenda_seq    SEQUENCE     �   CREATE SEQUENCE public.vendas_codvenda_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.vendas_codvenda_seq;
       public          postgres    false    215            =           0    0    vendas_codvenda_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.vendas_codvenda_seq OWNED BY public.vendas.codvenda;
          public          postgres    false    222            �           2604    16529    cliente codcliente    DEFAULT     p   ALTER TABLE ONLY public.cliente ALTER COLUMN codcliente SET DEFAULT nextval('public.cliente_id_seq'::regclass);
 A   ALTER TABLE public.cliente ALTER COLUMN codcliente DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16545    produtos codproduto    DEFAULT     z   ALTER TABLE ONLY public.produtos ALTER COLUMN codproduto SET DEFAULT nextval('public.produtos_codproduto_seq'::regclass);
 B   ALTER TABLE public.produtos ALTER COLUMN codproduto DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    16556    usuarios codusuario    DEFAULT     |   ALTER TABLE ONLY public.usuarios ALTER COLUMN codusuario SET DEFAULT nextval('public."usuarios_codUsuario_seq"'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN codusuario DROP DEFAULT;
       public          postgres    false    221    218            �           2604    16588    vendas codvenda    DEFAULT     r   ALTER TABLE ONLY public.vendas ALTER COLUMN codvenda SET DEFAULT nextval('public.vendas_codvenda_seq'::regclass);
 >   ALTER TABLE public.vendas ALTER COLUMN codvenda DROP DEFAULT;
       public          postgres    false    222    215            .          0    16526    cliente 
   TABLE DATA           D   COPY public.cliente (codcliente, nome, email, telefone) FROM stdin;
    public          postgres    false    217   �&       1          0    16542    produtos 
   TABLE DATA           o   COPY public.produtos (codproduto, marca, valor, estoque, tipo, cor, nome, "ativoInativo", tamanho) FROM stdin;
    public          postgres    false    220   �&       /          0    16534    usuarios 
   TABLE DATA           J   COPY public.usuarios (nome, email, numero, senha, codusuario) FROM stdin;
    public          postgres    false    218   0'       ,          0    16517    vendas 
   TABLE DATA           h   COPY public.vendas (codcliente, codproduto, codusuario, status, data, valortotal, codvenda) FROM stdin;
    public          postgres    false    215   {'       >           0    0    cliente_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cliente_id_seq', 1, true);
          public          postgres    false    216            ?           0    0    produtos_codproduto_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.produtos_codproduto_seq', 1, true);
          public          postgres    false    219            @           0    0    usuarios_codUsuario_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."usuarios_codUsuario_seq"', 1, false);
          public          postgres    false    221            A           0    0    vendas_codvenda_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.vendas_codvenda_seq', 4, true);
          public          postgres    false    222            �           2606    16533    cliente cliente_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (codcliente);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    217            �           2606    16549    produtos produtos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (codproduto);
 @   ALTER TABLE ONLY public.produtos DROP CONSTRAINT produtos_pkey;
       public            postgres    false    220            �           2606    16563    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (codusuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    218            �           2606    16595    vendas vendas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT vendas_pkey PRIMARY KEY (codvenda);
 <   ALTER TABLE ONLY public.vendas DROP CONSTRAINT vendas_pkey;
       public            postgres    false    215            �           2606    16564    vendas cliente    FK CONSTRAINT     �   ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT cliente FOREIGN KEY (codcliente) REFERENCES public.cliente(codcliente) NOT VALID;
 8   ALTER TABLE ONLY public.vendas DROP CONSTRAINT cliente;
       public          postgres    false    215    217    4757            �           2606    16574    vendas produtos    FK CONSTRAINT     �   ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT produtos FOREIGN KEY (codproduto) REFERENCES public.produtos(codproduto) NOT VALID;
 9   ALTER TABLE ONLY public.vendas DROP CONSTRAINT produtos;
       public          postgres    false    215    220    4761            �           2606    16569    vendas usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT usuario FOREIGN KEY (codusuario) REFERENCES public.usuarios(codusuario) NOT VALID;
 8   ALTER TABLE ONLY public.vendas DROP CONSTRAINT usuario;
       public          postgres    false    218    215    4759            .   &   x�3��)MN,��鹉�9z������������ �g
�      1   <   x�3����N�RQ0���10�4�,I��,�L*J�K·p@j�"�%�e��&\1z\\\ T�l      /   ;   x��)MN,VH+JM-N��q l��������\NSCK�442615�4����� ���      ,   j   x�3�4°�s2S�9��tA�3HE���R���Ӑ��( 5/%5�$��T��L����������91/95'1%��������̘�2#�2�=... �@ �     